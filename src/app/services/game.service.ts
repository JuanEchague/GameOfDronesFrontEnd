import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private readonly apiUrl = 'https://www.gameofdrones.somee.com/api/Players';
 
  
  constructor(private http: HttpClient) {}
  
  getPlayerByName(name: string): Observable<Player> {
    return this.http.get<Player>(`${this.apiUrl}/name/${name}`);
  }

  getPlayerScores():Observable<Player[]>{
  return this.http.get<Player[]>(`${this.apiUrl}`);
  }

  updatePlayerScore(playerId: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/UpdateScore/${playerId}`, null);
  }

  deletePlayer(playerId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${playerId}`);
  }
  resetPlayerScore(playerId: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${playerId}/reset`, null);
  }
}
