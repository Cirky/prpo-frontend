import { Component, OnInit } from '@angular/core';
import { SeznamiService } from '../../storitve/seznami.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Artikel } from '../../razredi/artikel';
import { switchMap } from 'rxjs/operators';
import { Location } from "@angular/common";
import { NakupovalniSeznam } from "../../razredi/nakupovalni-seznam";
import { NakupovalniSeznamIdDto } from "../../razredi/nakupovalni-seznam-id-dto";

@Component({
  selector: 'app-seznam-podrobnosti',
  templateUrl: './seznam-podrobnosti.component.html',
  styleUrls: ['./seznam-podrobnosti.component.css']
})
export class SeznamPodrobnostiComponent implements OnInit {

  seznam: NakupovalniSeznam;
  seznamIdDto: NakupovalniSeznamIdDto;
  skupnaCena: Number;
  constructor(
    private seznamiService: SeznamiService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    this.seznamIdDto = new NakupovalniSeznamIdDto;
    this.route.params
      .pipe(switchMap((params: Params) => this.seznamiService.getSeznam(+params["id"])))
      .subscribe(seznam => 
        {this.seznam = seznam;
        this.vrniSkupnoCeno();
        });
  }
  dodajArtikel(): void {
    this.router.navigate(["seznami/" + this.seznam.id + "/dodaj"]);
  }
  vrniSkupnoCeno(): void {
    this.seznamIdDto.seznamId = this.seznam.id;
    this.seznamiService
      .getCena(this.seznamIdDto)
      .subscribe(skupnaCena => {
        this.skupnaCena = skupnaCena;
        console.log(skupnaCena);
      });
  }
  nazaj(): void {
    this.router.navigate(["seznami"]);
  }
}
