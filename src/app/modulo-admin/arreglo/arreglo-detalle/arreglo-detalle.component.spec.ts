import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArregloDetalleComponent } from './arreglo-detalle.component';

describe('ArregloDetalleComponent', () => {
  let component: ArregloDetalleComponent;
  let fixture: ComponentFixture<ArregloDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArregloDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArregloDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
