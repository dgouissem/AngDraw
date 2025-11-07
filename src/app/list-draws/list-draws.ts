import { Component } from '@angular/core';
import { DataSource } from '../data-source';

@Component({
  selector: 'app-list-draws',
  standalone: false,
  templateUrl: './list-draws.html',
  styleUrl: './list-draws.scss',
})
export class ListDraws {
  /**
   *
   */
  constructor(public dataSource: DataSource) {

  }

  doClick(id: string) {
    console.log(`id dessin: ${id}`);
  }
}
