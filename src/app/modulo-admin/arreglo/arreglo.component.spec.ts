import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArregloComponent } from './arreglo.component';

describe('ArregloComponent', () => {
  let component: ArregloComponent;
  let fixture: ComponentFixture<ArregloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArregloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArregloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
