import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { DodajArtikelComponent } from "./skupno/komponente/dodaj-artikel/dodaj-artikel.component";
import { NakupovalniSeznamiComponent } from "./skupno/komponente/nakupovalni-seznami/nakupovalni-seznami.component";
import { SeznamPodrobnostiComponent } from "./skupno/komponente/seznam-podrobnosti/seznam-podrobnosti.component";

const routes: Routes = [
    {
        path: "", redirectTo: "/seznami", pathMatch: "full"
    },
    {
        path: "seznami", component: NakupovalniSeznamiComponent
    },
    {
        path: "seznami/:id", component: SeznamPodrobnostiComponent
    },
    {
        path: "seznami/:id/dodaj", component: DodajArtikelComponent
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
