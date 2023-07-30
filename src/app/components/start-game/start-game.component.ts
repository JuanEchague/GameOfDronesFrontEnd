import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent {

  constructor(private router: Router) {}
  
  scores(){
    this.router.navigate(['/game-result'])
  }
  startGame() {
    // Navega al componente donde los jugadores ingresarán sus nombres
    this.router.navigate(['/player-names']);
  }
}
