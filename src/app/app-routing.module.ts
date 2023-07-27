import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartGameComponent } from './components/start-game/start-game.component';
import { PlayerNamesComponent } from './components/player-names/player-names.component';
import { GameBoardComponent } from './components/game-board/game-board.component'; 
import { GameResultComponent } from './components/game-result/game-result.component'; 


const routes: Routes = [
  { path: '', component: StartGameComponent },
  { path: 'player-names', component: PlayerNamesComponent },
  { path: 'game-board', component: GameBoardComponent },
  { path: 'game-result', component: GameResultComponent },
  { path: 'start-game', component: StartGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
