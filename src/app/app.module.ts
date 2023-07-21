import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartGameComponent } from './components/start-game/start-game.component';
import { PlayerNamesComponent } from './components/player-names/player-names.component';
import { GameService } from './services/game.service';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { GameResultComponent } from './components/game-result/game-result.component';
import { RoundResultComponent } from './components/round-result/round-result.component';
import { CongratulationsComponent } from './components/congratulations/congratulations.component';

@NgModule({
  declarations: [
    AppComponent,
    StartGameComponent,
    PlayerNamesComponent,
    GameBoardComponent,
    GameResultComponent,
    RoundResultComponent,
    CongratulationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
