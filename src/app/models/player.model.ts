export interface Player {
  id: number;
  name: string;
  move: Move; 
}

export enum Move {
  None = '',
  Rock = 'Rock',
  Paper = 'Paper',
  Scissors = 'Scissors'
}
