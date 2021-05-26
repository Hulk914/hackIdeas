import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageChallengesComponent } from './manage-challenges.component';
import { By } from '@angular/platform-browser';

class RouterStub {
  navigate(params) {}
}

describe('ManageChallengesComponent', () => {
  let component: ManageChallengesComponent;
  let fixture: ComponentFixture<ManageChallengesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageChallengesComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [FormBuilder, { provide: Router, useClass: RouterStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create formArray having 6 form controls', () => {
    component.initializeForm();
    const control = component.dataStore.parentFormGroup.get('posts').get('0');
    expect(control.get('id')).toBeTruthy();
    expect(control.get('title')).toBeTruthy();
    expect(control.get('description')).toBeTruthy();
    expect(control.get('tags')).toBeTruthy();
    expect(control.get('likes')).toBeTruthy();
    expect(control.get('createdOn')).toBeTruthy();
  });

  it('should create form with mandatory title and description', () => {
    component.initializeForm();
    const control = component.dataStore.parentFormGroup.get('posts').get('0');
    control.get('title').setValue('');
    control.get('description').setValue('');
    expect(control.get('title').invalid).toBeTruthy();
    expect(control.get('description').invalid).toBeTruthy();
  });

  it('should add new challenge on add Challenge', () => {
    component.initializeForm();
    const lengthBeforeAdd =
      component.dataStore.parentFormGroup.get('posts').value.length;
    component.addChallenge();
    const lengthAfterAdd =
      component.dataStore.parentFormGroup.get('posts').value.length;
    expect(lengthAfterAdd - lengthBeforeAdd).toBe(1);
  });

  it('should save changes and show challenges for valid form', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');
    component.initializeForm();
    fixture.debugElement.query(By.css('#save')).nativeElement.click();
    expect(spy).toHaveBeenCalledWith(['/home/features/view']);
  });

  it('should not save changes for invalid form', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');
    component.initializeForm();
    component.addChallenge();
    fixture.debugElement.query(By.css('#save')).nativeElement.click();
    expect(spy).not.toHaveBeenCalledWith(['/home/features/view']);
  });
});
