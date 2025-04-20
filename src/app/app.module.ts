import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DelayInterceptor } from './_httpInterceptors/delay.interceptor';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DbInMemoryService } from './_service/db-in-memory.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      DbInMemoryService,
      { 
        dataEncapsulation: false,
        delay: 500, // Simule un délai réseau (optionnel)
        passThruUnknownUrl: true // Permet le passage des requêtes non gérées (utile pour le vrai backend plus tard)
      }
    )
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, {
    provide: HTTP_INTERCEPTORS,
    useClass: DelayInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
