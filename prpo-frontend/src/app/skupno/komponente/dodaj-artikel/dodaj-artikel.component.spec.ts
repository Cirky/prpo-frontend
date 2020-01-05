import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajArtikelComponent } from './dodaj-artikel.component';

describe('DodajArtikelComponent', () => {
  let component: DodajArtikelComponent;
  let fixture: ComponentFixture<DodajArtikelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajArtikelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
