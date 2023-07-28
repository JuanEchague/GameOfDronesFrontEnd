import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartGameComponent } from './components/start-game/start-game.component';
import { PlayerNamesComponent } from './components/player-names/player-names.component';
import { GameService } from './services/game.service';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { GameResultComponent } from './components/game-result/game-result.component';



@NgModule({
  declarations: [
    AppComponent,
    StartGameComponent,
    PlayerNamesComponent,
    GameBoardComponent,
    GameResultComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
