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
  
  constructor(private http: HttpClient) {}

  setPlayers(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getPlayer1(): Observable<Player | undefined> {
    return this.http.get<Player>(`${this.apiUrl}/1`);
  }

  getPlayer2(): Observable<Player | undefined> {
    return this.http.get<Player>(`${this.apiUrl}/2`);
  }

  createPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(`${this.apiUrl}`, player);
  }

  updatePlayer(player: Player): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${player.id}`, player);
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
