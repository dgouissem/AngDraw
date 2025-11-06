import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ZoneDessin } from './zone-dessin/zone-dessin';
import { TopBar } from './top-bar/top-bar';
import { ZWorkSpace } from './zwork-space/zwork-space';
import { MatGridListModule } from '@angular/material/grid-list';
import { ListDraws } from './list-draws/list-draws';

@NgModule({
  declarations: [
    App,
    ZoneDessin,
    TopBar,
    ZWorkSpace,
    ListDraws
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
