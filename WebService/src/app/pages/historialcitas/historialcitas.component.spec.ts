import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialcitasComponent } from './historialcitas.component';

describe('HistorialcitasComponent', () => {
  let component: HistorialcitasComponent;
  let fixture: ComponentFixture<HistorialcitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialcitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialcitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
