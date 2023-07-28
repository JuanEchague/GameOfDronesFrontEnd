import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private readonly apiUrl = 'https://localhost:7186/api/Players';
  private player1: Player | undefined;
  private player2: Player | undefined;
  private winner: Player | undefined;
  private player1Name: string | undefined;
  private player2Name: string | undefined;

  constructor(private http: HttpClient) {}

  setPlayers(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
    this.player1Name = player1.name;
    this.player2Name = player2.name;
  }
 
  getPlayerByName(name: string): Observable<Player> {
    return this.http.get<Player>(`${this.apiUrl}/name/${name}`);
  }

  createPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(`${this.apiUrl}`, player);
  }

  updatePlayerScore(playerId: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/UpdateScore/${playerId}`, null);
  }

  deletePlayer(playerId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${playerId}`);
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
