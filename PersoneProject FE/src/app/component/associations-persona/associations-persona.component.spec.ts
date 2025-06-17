import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationsPersonaComponent } from './associations-persona.component';

describe('AssociationsPersonaComponent', () => {
  let component: AssociationsPersonaComponent;
  let fixture: ComponentFixture<AssociationsPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociationsPersonaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociationsPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
