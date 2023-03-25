import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasHoyComponent } from './citas-hoy.component';

describe('CitasHoyComponent', () => {
  let component: CitasHoyComponent;
  let fixture: ComponentFixture<CitasHoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitasHoyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitasHoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
