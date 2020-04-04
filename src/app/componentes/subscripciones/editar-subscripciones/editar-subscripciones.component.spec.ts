import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSubscripcionesComponent } from './editar-subscripciones.component';

describe('EditarSubscripcionesComponent', () => {
  let component: EditarSubscripcionesComponent;
  let fixture: ComponentFixture<EditarSubscripcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarSubscripcionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSubscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
