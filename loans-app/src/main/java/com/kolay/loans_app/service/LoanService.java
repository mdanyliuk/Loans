package com.kolay.loans_app.service;

import com.kolay.loans_app.domain.Event;
import com.kolay.loans_app.domain.Loan;
import com.kolay.loans_app.domain.Player;
import com.kolay.loans_app.model.EventDTO;
import com.kolay.loans_app.model.LoanDTO;
import com.kolay.loans_app.repos.EventRepository;
import com.kolay.loans_app.repos.LoanRepository;
import com.kolay.loans_app.repos.PlayerRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


@Service
public class LoanService {

    private final LoanRepository loanRepository;
    private final EventRepository eventRepository;
    private final PlayerRepository playerRepository;

    public LoanService(final LoanRepository loanRepository, final EventRepository eventRepository,
            final PlayerRepository playerRepository) {
        this.loanRepository = loanRepository;
        this.eventRepository = eventRepository;
        this.playerRepository = playerRepository;
    }

    public List<LoanDTO> findAll() {
        return loanRepository.findAll()
                .stream()
                .map(loan -> mapToDTO(loan, new LoanDTO()))
                .collect(Collectors.toList());
    }

    public LoanDTO get(final Long id) {
        return loanRepository.findById(id)
                .map(loan -> mapToDTO(loan, new LoanDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final LoanDTO loanDTO) {
        final Loan loan = new Loan();
        mapToEntity(loanDTO, loan);
        return loanRepository.save(loan).getId();
    }

    public void update(final Long id, final LoanDTO loanDTO) {
        final Loan loan = loanRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(loanDTO, loan);
        loanRepository.save(loan);
    }

    public void delete(final Long id) {
        loanRepository.deleteById(id);
    }

    private LoanDTO mapToDTO(final Loan loan, final LoanDTO loanDTO) {
        loanDTO.setId(loan.getId());
        loanDTO.setSum(loan.getSum());
        loanDTO.setPaid(loan.getPaid());
        loanDTO.setEvent(loan.getEvent() == null ? null : loan.getEvent().getId());
        loanDTO.setEventName(loan.getEvent() == null ? null : loan.getEvent().getName());
        loanDTO.setPlayer(loan.getPlayer() == null ? null : loan.getPlayer().getId());
        loanDTO.setPlayerName(loan.getPlayer() == null ? null : loan.getPlayer().getName());
        return loanDTO;
    }

    private Loan mapToEntity(final LoanDTO loanDTO, final Loan loan) {
        loan.setSum(loanDTO.getSum());
        loan.setPaid(loanDTO.getPaid());
        if (loanDTO.getEvent() != null && (loan.getEvent() == null || !loan.getEvent().getId().equals(loanDTO.getEvent()))) {
            final Event event = eventRepository.findById(loanDTO.getEvent())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "event not found"));
            loan.setEvent(event);
        }
        if (loanDTO.getPlayer() != null && (loan.getPlayer() == null || !loan.getPlayer().getId().equals(loanDTO.getPlayer()))) {
          final Player player = playerRepository.findById(loanDTO.getPlayer())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "player not found"));
            loan.setPlayer(player);
        }
        return loan;
    }

    public List<LoanDTO> findByEvent(Event event) {
        return loanRepository.findByEvent(event)
                .stream()
                .map(loan -> mapToDTO(loan, new LoanDTO()))
                .collect(Collectors.toList());
    }

    public List<LoanDTO> findByPlayer(Player player) {
      return loanRepository.findByPlayerAndPaid(player, false)
        .stream()
        .map(loan -> mapToDTO(loan, new LoanDTO()))
        .collect(Collectors.toList());
    }
}
