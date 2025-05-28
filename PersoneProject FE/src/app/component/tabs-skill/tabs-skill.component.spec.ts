import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsSkillComponent } from './tabs-skill.component';

describe('TabsSkillComponent', () => {
  let component: TabsSkillComponent;
  let fixture: ComponentFixture<TabsSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsSkillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
