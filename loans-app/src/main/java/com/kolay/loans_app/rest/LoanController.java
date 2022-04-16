package com.kolay.loans_app.rest;

import com.kolay.loans_app.model.LoanDTO;
import com.kolay.loans_app.service.EventService;
import com.kolay.loans_app.service.LoanService;
import com.kolay.loans_app.service.PlayerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping(value = "/api/loans", produces = MediaType.APPLICATION_JSON_VALUE)
public class LoanController {

    private final LoanService loanService;
    private final EventService eventService;
    private final PlayerService playerService;

    public LoanController(final LoanService loanService, final EventService eventService, final PlayerService playerService) {
        this.loanService = loanService;
        this.eventService = eventService;
        this.playerService = playerService;
    }

    @GetMapping
    public ResponseEntity<List<LoanDTO>> getAllLoans() {
        return ResponseEntity.ok(loanService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<LoanDTO> getLoan(@PathVariable final Long id) {
        return ResponseEntity.ok(loanService.get(id));
    }

    @PostMapping
    public ResponseEntity<Long> createLoan(@RequestBody @Valid final LoanDTO loanDTO) {
        return new ResponseEntity<>(loanService.create(loanDTO), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateLoan(@PathVariable final Long id,
            @RequestBody @Valid final LoanDTO loanDTO) {

        loanService.update(id, loanDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLoan(@PathVariable final Long id) {
        loanService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/event/{id}")
    public ResponseEntity<List<LoanDTO>> getLoansByEvent(@PathVariable final Long id) {
        return ResponseEntity.ok(loanService.findByEvent(eventService.getEntity(id)));
    }

    @GetMapping("/player/{id}")
    public ResponseEntity<List<LoanDTO>> getLoansByPlayer(@PathVariable final Long id) {
        return ResponseEntity.ok(loanService.findByPlayer(playerService.getEntity(id)));
    }

}
