import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVehiculoComponent } from './modal-vehiculo.component';

describe('ModalVehiculoComponent', () => {
  let component: ModalVehiculoComponent;
  let fixture: ComponentFixture<ModalVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
