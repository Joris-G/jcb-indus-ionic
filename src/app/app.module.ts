import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DelayInterceptor } from './_httpInterceptors/delay.interceptor';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './_dev_services/in-memory-data.service';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService,
            {
                dataEncapsulation: false,
                delay: 500, // Simule un délai réseau (optionnel)
                passThruUnknownUrl: true, // Permet le passage des requêtes non gérées (utile pour le vrai backend plus tard)
                apiBase: 'fakeApi/'
            }
        )
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi()),

    ] })
export class AppModule { }
