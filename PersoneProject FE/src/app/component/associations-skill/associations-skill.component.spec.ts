import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationsSkillComponent } from './associations-skill.component';

describe('AssociationsSkillComponent', () => {
  let component: AssociationsSkillComponent;
  let fixture: ComponentFixture<AssociationsSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociationsSkillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociationsSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
