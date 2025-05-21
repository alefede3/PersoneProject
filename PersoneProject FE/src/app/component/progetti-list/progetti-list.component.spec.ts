import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgettiListComponent } from './progetti-list.component';

describe('ProgettiListComponent', () => {
  let component: ProgettiListComponent;
  let fixture: ComponentFixture<ProgettiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgettiListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgettiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
