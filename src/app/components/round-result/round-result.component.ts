import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-round-result',
  templateUrl: './round-result.component.html',
  styleUrls: ['./round-result.component.scss']
})
export class RoundResultComponent {
  @Input() player1Move?: string; // Agrega '?' para que sea opcional
  @Input() player2Move?: string; // Agrega '?' para que sea opcional
  @Input() roundWinner?: Player | null; // Agrega '?' para que sea opcional

  @Output() roundResultDismissed: EventEmitter<void> = new EventEmitter<void>();
}
