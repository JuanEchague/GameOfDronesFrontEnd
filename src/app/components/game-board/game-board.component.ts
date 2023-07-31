import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
  showCongratulations = false;// Mostrar u ocultar botones de selección de movimiento
  showMoveButtons = true;
  roundWinner: Player | null = null;
  winnerName = '';
  player1Move: Move = Move.None; 
  player2Move: Move = Move.None;
  player1Name!: string;
  player2Name!: string;
  Move = Move;
 


  constructor(
    private route: ActivatedRoute,
    private router: Router,
     private gameService: GameService
     ) {  }

  ngOnInit() {
   // Obtener los nombres de los jugadores desde los queryParams
   this.route.queryParams.subscribe((params: Params) => {
    this.player1Name = params['player1Name'];
    this.player2Name = params['player2Name'];

    // Obtener los jugadores utilizando los nombres obtenidos
    this.gameService.getPlayerByName(this.player1Name).subscribe((player1) => {
      this.player1 = player1;
          });

    this.gameService.getPlayerByName(this.player2Name).subscribe((player2) => {
      this.player2 = player2;
    });
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
      this.showMoveButtons = false; 
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
    
      if (this.player1Score >= 3 || this.player2Score >= 3) {
        this.showRoundResult = false;
        this.showCongratulations = true;
        this.winnerName = this.player1Score >= 3 ? this.player1.name : this.player2.name;
    
        // Actualizar puntaje del jugador ganador en el backend
        const winnerId = this.player1Score >= 3 ? this.player1.id : this.player2.id;
        this.gameService.updatePlayerScore(winnerId).subscribe(() => {
          
        });
      }
    
      // Restablecer los movimientos después de calcular el ganador
      this.player1Move = Move.None;
      this.player2Move = Move.None;
    }

    onRoundResultDismissed() {
      this.showRoundResult = false;
      if (!this.showCongratulations) {
        this.showMoveButtons = true;
      }
  }
  
 
    onCongratulationsDismissed() {
      this.showMoveButtons = true; 
      this.showCongratulations = false;
    }
    onContinueRound() {
      this.player1Move = Move.None;
      this.player2Move = Move.None;
      this.roundWinner = null; 
      this.showRoundResult = false;
      this.showMoveButtons = true; 
    }

  onRestartGame() {
    this.resetGame();
    this.router.navigate(['start-game']);
  }

  onContinuePlaying() {
    this.player1Score = 0;
    this.player2Score = 0;
    this.player1Move = Move.None;
    this.player2Move = Move.None;
    this.showCongratulations = false;
    this.showMoveButtons = true; 
  }
  resetGame() {
    this.player1Score = 0;
    this.player2Score = 0;
    this.player1Move = Move.None;
    this.player2Move = Move.None;
    this.showRoundResult = false;
    this.showCongratulations = false;
    this.roundWinner = null;
    this.winnerName = '';
  }
}
