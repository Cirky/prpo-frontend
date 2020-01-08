import { Component, OnInit } from '@angular/core';
import { NakupovalniSeznam } from '../../razredi/nakupovalni-seznam';
import { SeznamiService } from '../../storitve/seznami.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nakupovalni-seznami',
  templateUrl: './nakupovalni-seznami.component.html',
  styleUrls: ['./nakupovalni-seznami.component.css']
})
export class NakupovalniSeznamiComponent implements OnInit {

  seznami: NakupovalniSeznam[];
  seznam: NakupovalniSeznam;

  getSeznami(): void {
    this.seznamiService
      .getSeznami()
      .subscribe(seznami => {
        this.seznami = seznami;
        console.log(seznami);
      });
  }

  delete(seznam: NakupovalniSeznam): void {
    this.seznamiService
      .delete(seznam.id)
      .subscribe(seznamId => this.seznami = this.seznami.filter(s => s.id != seznamId));//nevem ce je tku
  }
  
  naPodrobnosti(seznam: NakupovalniSeznam): void {
    this.seznam = seznam;
    this.router.navigate(["/seznami", this.seznam.id]);
  }

  constructor(
    private seznamiService: SeznamiService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getSeznami();
  }

}
