package com.kolay.loans_app.rest;

import com.kolay.loans_app.model.EventDTO;
import com.kolay.loans_app.service.EventService;
import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping(value = "/api/events", produces = MediaType.APPLICATION_JSON_VALUE)
public class EventController {

    private final EventService eventService;

    public EventController(final EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping
    public ResponseEntity<List<EventDTO>> getAllEvents() {
        return ResponseEntity.ok(eventService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<EventDTO> getEvent(@PathVariable final Long id) {
        return ResponseEntity.ok(eventService.get(id));
    }

    @PostMapping
    public ResponseEntity<Long> createEvent(@RequestBody @Valid final EventDTO eventDTO) {
        return new ResponseEntity<>(eventService.create(eventDTO), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateEvent(@PathVariable final Long id,
            @RequestBody @Valid final EventDTO eventDTO) {
        eventService.update(id, eventDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable final Long id) {
        eventService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
