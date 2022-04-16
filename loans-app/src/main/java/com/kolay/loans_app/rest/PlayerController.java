package com.kolay.loans_app.rest;

import com.kolay.loans_app.model.PlayerDTO;
import com.kolay.loans_app.service.PlayerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping(value = "/api/players", produces = MediaType.APPLICATION_JSON_VALUE)
public class PlayerController {

    private final PlayerService playerService;

    public PlayerController(final PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping
    public ResponseEntity<List<PlayerDTO>> getAllPlayers() {
        return ResponseEntity.ok(playerService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlayerDTO> getPlayer(@PathVariable final Long id) {
        return ResponseEntity.ok(playerService.get(id));
    }

    @PostMapping
    public ResponseEntity<Long> createPlayer(@RequestBody @Valid final PlayerDTO playerDTO) {
        return new ResponseEntity<>(playerService.create(playerDTO), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updatePlayer(@PathVariable final Long id,
            @RequestBody @Valid final PlayerDTO playerDTO) {
        playerService.update(id, playerDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlayer(@PathVariable final Long id) {
        playerService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
