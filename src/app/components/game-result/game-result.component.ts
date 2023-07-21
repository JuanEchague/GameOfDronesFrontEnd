import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss']
})
export class GameResultComponent implements OnInit {
  winnerName: string | undefined;

  constructor(private router: Router, private gameService: GameService) {}

  ngOnInit(): void {
    const winner = this.gameService.getWinner();
    if (winner) {
      this.winnerName = winner.name;
    } else {
      this.router.navigate(['/player-names']);
    }
  }

  playAgain() {
    // Reinicia los resultados y regresa al inicio del juego
    this.gameService.resetGame();
    this.router.navigate(['/']);
  }
}
