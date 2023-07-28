import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-round-result',
  templateUrl: './round-result.component.html',
  styleUrls: ['./round-result.component.scss']
})
export class RoundResultComponent {
  @Input() player1Move?: string; 
  @Input() player2Move?: string; 
  @Input() roundWinner?: Player | null; 

  @Output() roundResultDismissed: EventEmitter<void> = new EventEmitter<void>();

  dismissRoundResult() {
    this.roundResultDismissed.emit();
  }
}
