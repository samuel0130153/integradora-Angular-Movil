import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasArchivadasComponent } from './citas-archivadas.component';

describe('CitasArchivadasComponent', () => {
  let component: CitasArchivadasComponent;
  let fixture: ComponentFixture<CitasArchivadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitasArchivadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitasArchivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
