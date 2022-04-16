package com.kolay.loans_app.repos;

import com.kolay.loans_app.domain.Event;
import com.kolay.loans_app.domain.Loan;
import com.kolay.loans_app.domain.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("http://localhost:4200")
public interface LoanRepository extends JpaRepository<Loan, Long> {
    List<Loan> findByEvent(@Param("event") Event event);

    List<Loan> findByPlayerAndPaid(Player player, boolean paid);
}
