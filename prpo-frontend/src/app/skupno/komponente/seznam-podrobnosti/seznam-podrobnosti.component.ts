import { Component, OnInit } from '@angular/core';
import { SeznamiService } from '../../storitve/seznami.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Artikel } from '../../razredi/artikel';
import { switchMap } from 'rxjs/operators';
import { Location } from "@angular/common";
import { NakupovalniSeznam } from "../../razredi/nakupovalni-seznam";
@Component({
  selector: 'app-seznam-podrobnosti',
  templateUrl: './seznam-podrobnosti.component.html',
  styleUrls: ['./seznam-podrobnosti.component.css']
})
export class SeznamPodrobnostiComponent implements OnInit {

  seznam: NakupovalniSeznam;

  constructor(
    private seznamiService: SeznamiService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    this.route.params.pipe(
        switchMap((params: Params) => this.seznamiService.getSeznam(+params["id"])))
        .subscribe(seznam => this.seznam = seznam);
  }
  dodajArtikel(): void {
    this.router.navigate(["seznami/" + this.seznam.id + "/dodaj"]);
  }
  nazaj(): void {
    this.location.back();
  }
}
