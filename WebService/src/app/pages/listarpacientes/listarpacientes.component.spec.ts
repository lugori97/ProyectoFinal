import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarpacientesComponent } from './listarpacientes.component';

describe('ListarpacientesComponent', () => {
  let component: ListarpacientesComponent;
  let fixture: ComponentFixture<ListarpacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarpacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarpacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
