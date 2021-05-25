import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageChallengesComponent } from './manage-challenges.component';

describe('ManageChallengesComponent', () => {
  let component: ManageChallengesComponent;
  let fixture: ComponentFixture<ManageChallengesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageChallengesComponent ],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
