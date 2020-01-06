import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import { DodajArtikelComponent } from "./skupno/komponente/dodaj-artikel/dodaj-artikel.component";
import { NakupovalniSeznamiComponent } from "./skupno/komponente/nakupovalni-seznami/nakupovalni-seznami.component";
import { SeznamPodrobnostiComponent } from "./skupno/komponente/seznam-podrobnosti/seznam-podrobnosti.component";



@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        DodajArtikelComponent,
        NakupovalniSeznamiComponent,
        SeznamPodrobnostiComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

