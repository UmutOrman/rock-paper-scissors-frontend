import { GameResult } from "./GameResult";
import { Hand } from "./Hand";

export interface Response {
    computerHand: Hand;
    gameResult: GameResult
}