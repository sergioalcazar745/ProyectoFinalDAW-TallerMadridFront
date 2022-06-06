import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalArregloComponent } from './modal-arreglo.component';

describe('ModalArregloComponent', () => {
  let component: ModalArregloComponent;
  let fixture: ComponentFixture<ModalArregloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalArregloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalArregloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
