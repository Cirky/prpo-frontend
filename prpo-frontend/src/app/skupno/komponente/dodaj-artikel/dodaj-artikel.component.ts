import { Component, OnInit } from '@angular/core';
import { SeznamiService } from '../../storitve/seznami.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Artikel } from '../../razredi/artikel';

@Component({
  selector: 'app-dodaj-artikel',
  templateUrl: './dodaj-artikel.component.html',
  styleUrls: ['./dodaj-artikel.component.css']
})
export class DodajArtikelComponent implements OnInit {
  private sub: any;
  seznamId: number;
  artikel: Artikel = new Artikel;

  public dodajArtikel(): void {
    this.seznamiService.dodajArtikel(this.seznamId, this.artikel)
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
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
