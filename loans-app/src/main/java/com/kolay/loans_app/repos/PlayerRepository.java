package com.kolay.loans_app.repos;

import com.kolay.loans_app.domain.Player;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PlayerRepository extends JpaRepository<Player, Long> {
}
