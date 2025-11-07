import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ZoneDessin } from './zone-dessin/zone-dessin';
import { TopBar } from './top-bar/top-bar';
import { ZWorkSpace } from './zwork-space/zwork-space';
import { MatGridListModule } from '@angular/material/grid-list';
import { ListDraws } from './list-draws/list-draws';
import { PageDessinInformation } from './page-dessin-information/page-dessin-information';
import { PageDessin } from './page-dessin/page-dessin';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    App,
    ZoneDessin,
    TopBar,
    ZWorkSpace,
    ListDraws,
    PageDessinInformation,
    PageDessin
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
