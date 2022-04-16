package com.kolay.loans_app.repos;

import com.kolay.loans_app.domain.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface EventRepository extends JpaRepository<Event, Long> {
}
