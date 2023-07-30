import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { Player } from '../../models/player.model';
@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss']
})
export class GameResultComponent implements OnInit {
  players: Player[] = [];

  constructor(private router: Router, private gameService: GameService) {}

  ngOnInit(): void {
  this.getScores();
  }

  getScores(){
    this.gameService.getPlayerScores().subscribe(data=>{
      this.players = data.sort((a, b) => b.score - a.score);
    })
   }
   deletePlayer(playerId: number) {
    if (confirm('Are you sure you want to delete this player?')) {
      this.gameService.deletePlayer(playerId).subscribe(() => {
        this.getScores();
      });
    }
  }

  resetPlayer(playerId: number) {
    if (confirm('Are you sure you want to reset this player\'s score?')) {
      this.gameService.resetPlayerScore(playerId).subscribe(() => {
        this.getScores();
      });
    }
  }
   goToStartGame() {
    this.router.navigate(['start-game']);
  }
}
