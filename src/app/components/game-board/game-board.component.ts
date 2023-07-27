import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player, Move } from '../../models/player.model'; 
import { GameService } from '../../services/game.service';


@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  player1!: Player;
  player2!: Player;
  player1Score: number = 0;
  player2Score: number = 0;
  showRoundResult = false;
  showCongratulations = false;
  roundWinner: Player | null = null;
  winnerName = '';
  player1Move: Move | undefined = Move.None;
  player2Move: Move | undefined = Move.None;
  player1Name!: string;
  player2Name!: string;
  Move = Move;

  constructor(private router: Router, private gameService: GameService) {  }

  ngOnInit() {
    this.gameService.getPlayerByName(this.player1.name).subscribe((player1) => {
      this.player1 = player1;
      this.player1Name = this.player1.name;
    });
  
    this.gameService.getPlayerByName(this.player2.name).subscribe((player2) => {
      this.player2 = player2;
      this.player2Name = this.player2.name;
    });

    this.player1Score = 0;
    this.player2Score = 0;
    this.showRoundResult = false;
    this.showCongratulations = false;
    this.roundWinner = null;
    this.winnerName = '';
  }

  onMoveSelected(player: Player, move: Move) {
    if (!player) {
      return;
    }

    if (player === this.player1) {
      this.player1Move = move;
    } else if (player === this.player2) {
      this.player2Move = move;
    }

    if (this.player1Move !== Move.None && this.player2Move !== Move.None) {
      this.calculateRoundWinner();
    }
  }

  calculateRoundWinner() {
    this.showRoundResult = true;
    if (!this.player1 || !this.player2) {
      return;
    }
  
    const player1Move = this.player1Move;
    const player2Move = this.player2Move;
  
    if (player1Move === player2Move) {
      this.roundWinner = null;
    } else if (
      (player1Move === Move.Rock && player2Move === Move.Scissors) ||
      (player1Move === Move.Paper && player2Move === Move.Rock) ||
      (player1Move === Move.Scissors && player2Move === Move.Paper)
    ) {
      this.roundWinner = this.player1;
      this.player1Score++;
    } else {
      this.roundWinner = this.player2;
      this.player2Score++;
    }
  
    setTimeout(() => {
      if (this.player1Score >= 3 || this.player2Score >= 3) {
        this.showCongratulations = true;
        this.winnerName = this.player1Score >= 3 ? this.player1.name : this.player2.name;
        this.resetGame();
      } else {
        this.player1Move = Move.None; // Restablecer los movimientos
        this.player2Move = Move.None; // después de calcular el ganador
        this.showRoundResult = false;
      }
    }, 3000);
  }

  onRoundResultDismissed() {
    this.showRoundResult = false;
  }

  onCongratulationsDismissed() {
    this.showCongratulations = false;
  }

  resetGame() {
    this.player1Score = 0;
  this.player2Score = 0;
  this.player1 = { id: 1, name: 'Player 1', move: Move.None };
  this.player2 = { id: 2, name: 'Player 2', move: Move.None };
  this.router.navigate(['/player-names']);
  }
}
