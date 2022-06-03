import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesDetalleComponent } from './clientes-detalle.component';

describe('ClientesDetalleComponent', () => {
  let component: ClientesDetalleComponent;
  let fixture: ComponentFixture<ClientesDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
