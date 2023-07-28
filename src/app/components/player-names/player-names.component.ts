import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-player-names',
  templateUrl: './player-names.component.html',
  styleUrls: ['./player-names.component.scss']
})
export class PlayerNamesComponent {
  player1Name: string = '';
  player2Name: string = '';

  constructor(private router: Router) {}

  startGame() {
    // Verifica que ambos nombres hayan sido ingresados antes de iniciar el juego
    if (this.player1Name.trim() !== '' && this.player2Name.trim() !== '') {
      // Navega al componente del tablero del juego
      this.router.navigate(['/game-board'], {
        queryParams: { player1Name: this.player1Name, player2Name: this.player2Name }
      });
    } else {
      alert('Please enter both player names before starting the game.');
    }
  }
}