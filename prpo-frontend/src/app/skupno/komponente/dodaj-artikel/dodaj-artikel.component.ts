import { Component, OnInit } from '@angular/core';
import { SeznamiService } from '../../storitve/seznami.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Artikel } from '../../razredi/artikel';
import { DodajanjeArtiklaDTO } from "../../razredi/dodajanje-artikla-dto";

@Component({
  selector: 'app-dodaj-artikel',
  templateUrl: './dodaj-artikel.component.html',
  styleUrls: ['./dodaj-artikel.component.css']
})
export class DodajArtikelComponent implements OnInit {
  private sub: any;
  seznamId: number;
  artikelDTO: DodajanjeArtiklaDTO;

  public dodajArtikel(): void {
    this.artikelDTO.seznamId = this.seznamId;
    this.seznamiService.dodajArtikel(this.artikelDTO)
        .subscribe(() => this.router.navigate(["/seznami/" + this.seznamId]))

  }
  public nazaj(): void {
    this.router.navigate(["/seznami"]);
  }

  constructor(
    private seznamiService: SeznamiService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.seznamId = +params["id"];
      this.artikelDTO = new DodajanjeArtiklaDTO;
      this.artikelDTO.artikel = new Artikel;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
