import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGastosComponent } from './modal-gastos.component';

describe('ModalGastosComponent', () => {
  let component: ModalGastosComponent;
  let fixture: ComponentFixture<ModalGastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGastosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
