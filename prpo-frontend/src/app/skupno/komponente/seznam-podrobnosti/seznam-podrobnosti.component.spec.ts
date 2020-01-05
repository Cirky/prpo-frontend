import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeznamPodrobnostiComponent } from './seznam-podrobnosti.component';

describe('SeznamPodrobnostiComponent', () => {
  let component: SeznamPodrobnostiComponent;
  let fixture: ComponentFixture<SeznamPodrobnostiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeznamPodrobnostiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeznamPodrobnostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
