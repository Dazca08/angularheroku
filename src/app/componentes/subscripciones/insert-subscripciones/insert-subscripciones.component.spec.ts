import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSubscripcionesComponent } from './insert-subscripciones.component';

describe('InsertSubscripcionesComponent', () => {
  let component: InsertSubscripcionesComponent;
  let fixture: ComponentFixture<InsertSubscripcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertSubscripcionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertSubscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
