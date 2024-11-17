import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueRemindersComponent } from './due-reminders.component';

describe('DueRemindersComponent', () => {
  let component: DueRemindersComponent;
  let fixture: ComponentFixture<DueRemindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DueRemindersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DueRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
