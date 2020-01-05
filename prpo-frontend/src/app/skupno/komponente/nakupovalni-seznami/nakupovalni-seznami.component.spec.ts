import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NakupovalniSeznamiComponent } from './nakupovalni-seznami.component';

describe('NakupovalniSeznamiComponent', () => {
  let component: NakupovalniSeznamiComponent;
  let fixture: ComponentFixture<NakupovalniSeznamiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NakupovalniSeznamiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NakupovalniSeznamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
