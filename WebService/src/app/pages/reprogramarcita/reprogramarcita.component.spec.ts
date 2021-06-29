import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprogramarcitaComponent } from './reprogramarcita.component';

describe('ReprogramarcitaComponent', () => {
  let component: ReprogramarcitaComponent;
  let fixture: ComponentFixture<ReprogramarcitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReprogramarcitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprogramarcitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
