package com.kolay.loans_app.service;

import com.kolay.loans_app.domain.Player;
import com.kolay.loans_app.model.PlayerDTO;
import com.kolay.loans_app.repos.PlayerRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


@Service
public class PlayerService {

    private final PlayerRepository playerRepository;

    public PlayerService(final PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public List<PlayerDTO> findAll() {
        return playerRepository.findAll()
                .stream()
                .map(player -> mapToDTO(player, new PlayerDTO()))
                .collect(Collectors.toList());
    }

    public PlayerDTO get(final Long id) {
        return playerRepository.findById(id)
                .map(player -> mapToDTO(player, new PlayerDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final PlayerDTO playerDTO) {
        final Player player = new Player();
        mapToEntity(playerDTO, player);
        return playerRepository.save(player).getId();
    }

    public void update(final Long id, final PlayerDTO playerDTO) {
        final Player player = playerRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(playerDTO, player);
        playerRepository.save(player);
    }

    public void delete(final Long id) {
        playerRepository.deleteById(id);
    }

    private PlayerDTO mapToDTO(final Player player, final PlayerDTO playerDTO) {
        playerDTO.setId(player.getId());
        playerDTO.setName(player.getName());
        return playerDTO;
    }

    private Player mapToEntity(final PlayerDTO playerDTO, final Player player) {
        player.setName(playerDTO.getName());
        return player;
    }

    public Player getEntity(final Long id) {
    return playerRepository.getById(id);
  }

}
