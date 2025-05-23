import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsTabsComponent } from './tabs-project.component';

describe('ProjectsTabsComponent', () => {
  let component: ProjectsTabsComponent;
  let fixture: ComponentFixture<ProjectsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
