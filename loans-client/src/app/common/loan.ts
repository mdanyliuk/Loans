import { Event } from "./event";
import { Player } from "./player";

export class Loan {
    id: number;
    sum: number;
    paid: boolean;
    event: number;
    player: number;
    playerName: string;
    eventName: string;
}
