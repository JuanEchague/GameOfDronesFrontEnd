import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Player, Move } from '../../models/player.model';
import { GameService } from '../../services/game.service';



@Component({
  selector: 'app-player-names',
  templateUrl: './player-names.component.html',
  styleUrls: ['./player-names.component.scss']
})
export class PlayerNamesComponent {
  player1Name: string = '';
  player2Name: string = '';

  constructor(private router: Router, @Inject(GameService) private gameService: GameService) {}

  startGame() {
    // Verifica que ambos nombres hayan sido ingresados antes de iniciar el juego
    if (this.player1Name.trim() !== '' && this.player2Name.trim() !== '') {
      const player1: Player = { id: 1, name: this.player1Name, move: Move.None };
      const player2: Player = { id: 2, name: this.player2Name, move: Move.None };

      // Guarda los nombres de los jugadores en el servicio GameService
      this.gameService.setPlayers(player1, player2);

      // Navega al componente del tablero del juego
      this.router.navigate(['/game-board'], {
        queryParams: { player1Name: this.player1Name, player2Name: this.player2Name }
      });
    } else {
      alert('Please enter both player names before starting the game.');
    }
  }
}