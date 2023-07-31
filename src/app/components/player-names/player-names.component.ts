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
      if (this.player1Name.trim() !== '' && this.player2Name.trim() !== '') {
        this.router.navigate(['/game-board'], {
        queryParams: { player1Name: this.player1Name, player2Name: this.player2Name }
      });
    } else {
      alert('Please enter both player names before starting the game.');
    }
  }
}