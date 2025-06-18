import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationsProgettoComponent } from './associations-progetto.component';

describe('AssociationsProgettoComponent', () => {
  let component: AssociationsProgettoComponent;
  let fixture: ComponentFixture<AssociationsProgettoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociationsProgettoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociationsProgettoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
