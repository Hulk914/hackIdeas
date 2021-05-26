import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Router } from '@angular/router';

class RouterStub {
  navigate(params) {}
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder, { provide: Router, useClass: RouterStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make empId control required', () => {
    const empIdCtrl = component.userForm.get('empId');
    empIdCtrl.setValue('');
    expect(empIdCtrl.invalid).toBeTrue();
  });

  it('should create a form with empId control', () => {
    expect(component.userForm.contains('empId')).toBeTruthy();
  });

  it('should redirect to challenge list after saving valid form', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');
    component.userForm.get('empId').setValue('123');
    component.loginHandler();
    expect(spy).toHaveBeenCalledWith(['/home']);
  });

  it('should not redirect to challenge list after saving invalid form', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');
    component.userForm.get('empId').setValue('');
    component.loginHandler();
    expect(spy).not.toHaveBeenCalledWith(['/home']);
  });

});
