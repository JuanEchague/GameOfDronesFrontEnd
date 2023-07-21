import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.scss']
})
export class CongratulationsComponent {
  @Input() winnerName: string = '';
  @Output() congratulationsDismissed = new EventEmitter();

  // La función para cerrar el mensaje emergente
  onCongratulationsDismissed() {
    this.congratulationsDismissed.emit();
  }
}