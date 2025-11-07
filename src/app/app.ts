import { Component, signal } from '@angular/core';
import { Tile } from './models';

// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AngDraw');
  confZHeight: string = '500';
  confZWidth: string = '500';

   fctGet(): string {
    return this.confZHeight;
  }

  doInterval(cpt: number) : void{
    console.log(`Evt Cpt ${cpt} `);
  }

  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 3, color: 'lightgreen'},
    {text: 'Three', cols: 3, rows: 3, color: 'lightpink'},
    {text: 'Four', cols: 4, rows: 1, color: '#DDBDF1'},
  ];
}
