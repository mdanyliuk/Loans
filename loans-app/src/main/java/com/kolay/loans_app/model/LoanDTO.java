package com.kolay.loans_app.model;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;


@Getter
@Setter
public class LoanDTO {

    private Long id;

    private Double sum;

    private Boolean paid;

    @NotNull
    private Long event;

    @NotNull
    private String eventName;

    @NotNull
    private Long player;

    @NotNull
    private String playerName;

}
