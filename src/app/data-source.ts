import { Injectable } from '@angular/core';
import { DessinType } from './models';
import { v4 } from 'uuid'

@Injectable({
  providedIn: 'root',
})
export class DataSource {
  private dessins: DessinType[] = [];

  addNewDessin(newDessin: DessinType): void {
    newDessin.id = v4().toString();
    console.log(newDessin.id);
    this.dessins.push(newDessin); // TODO gestion doublon
  }

  //property 
  public get size(): number {
    return this.dessins.length;
  }

  //function
  getDessin(id: string): DessinType {
    return {};
  }

  //function
  getAllDessins(): DessinType[] {
    return this.dessins;
  }
}
