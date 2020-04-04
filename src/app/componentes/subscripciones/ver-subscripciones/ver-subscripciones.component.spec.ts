import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSubscripcionesComponent } from './ver-subscripciones.component';

describe('VerSubscripcionesComponent', () => {
  let component: VerSubscripcionesComponent;
  let fixture: ComponentFixture<VerSubscripcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerSubscripcionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerSubscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
