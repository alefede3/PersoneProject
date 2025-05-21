import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiPersonaComponent } from './aggiungi-persona.component';

describe('AggiungiPersonaComponent', () => {
  let component: AggiungiPersonaComponent;
  let fixture: ComponentFixture<AggiungiPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggiungiPersonaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggiungiPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
