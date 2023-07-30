export interface Player {
  id: number;
  name: string;
  move: Move; 
  score:number;
}

export enum Move {
  None = '',
  Rock = 'Rock',
  Paper = 'Paper',
  Scissors = 'Scissors'
}
