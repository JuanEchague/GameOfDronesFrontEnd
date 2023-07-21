import { Injectable } from '@angular/core';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private player1: Player | undefined;
  private player2: Player | undefined;
  private winner: Player | undefined;
  constructor() {}

  setPlayers(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getPlayer1(): Player | undefined {
    return this.player1;
  }

  getPlayer2(): Player | undefined {
    return this.player2;
  }
  getWinner(): Player | undefined {
    return this.winner;
  }
  setWinner(player: Player) {
    this.winner = player;
  }
  resetGame() {
    this.player1 = undefined;
    this.player2 = undefined;
    this.winner = undefined;
  }
}
