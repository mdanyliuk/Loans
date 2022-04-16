package com.kolay.loans_app.model;

import java.time.LocalDate;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class EventDTO {

    private Long id;

    @NotNull
    @Size(max = 255)
    private String name;

    private LocalDate date;

}
