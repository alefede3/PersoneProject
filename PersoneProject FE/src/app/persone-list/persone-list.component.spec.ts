import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoneListComponent } from './persone-list.component';

describe('PersoneListComponent', () => {
  let component: PersoneListComponent;
  let fixture: ComponentFixture<PersoneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersoneListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
