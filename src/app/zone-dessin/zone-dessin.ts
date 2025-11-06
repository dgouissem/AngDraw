import { AfterViewInit, Component,  EventEmitter,  Input, OnDestroy, OnInit,  Output,  output } from '@angular/core';
import * as fabric from "fabric";
@Component({
  selector: 'app-zone-dessin',
  standalone: false,
  templateUrl: './zone-dessin.html',
  styleUrl: './zone-dessin.scss',
})
export class ZoneDessin implements AfterViewInit, OnInit, OnDestroy {

  private intervalToken: number = -1;
  private intervalCounter: number = 0;
  leCanvas?: fabric.Canvas;
  @Input('zHeight') zHeight: string = "500";
  @Input('zWidth') zWidth: string = "500";
  // @Output('compteur') intervalEvt = new EventEmitter<number>();
  public intervalEvt = output<number>({alias : "compteur "});

  //pour test
  private testPopulateCanvas(): void {
    const rect: fabric.Rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 100,
      height: 100
    });  // objet litéral

    this.leCanvas!.add(rect);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    if (this.intervalToken !== -1) {
      clearInterval(this.intervalToken);
      this.intervalToken = -1;
      this.intervalCounter = 0;
    }
  }
  ngOnInit(): void {
    console.log('ngOnInit');
    this.intervalToken = setInterval(()=> {
      console.log('plus compteur');
      this.intervalCounter+=1;
      //emission de l'event
      this.intervalEvt.emit(this.intervalCounter);
    }, 200);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    this.leCanvas = new fabric.Canvas('lazone');
    this.testPopulateCanvas();
  }


}

