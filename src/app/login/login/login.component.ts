import { DataStoreService } from './../../data-store.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    public router: Router,
    private fb: FormBuilder,
    private _dataStore: DataStoreService
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      empId: ['', Validators.required],
    });
  }

  loginHandler() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
    if (!this._dataStore.loginUser(this.userForm.get('empId').value)) {
      return;
    }
    this.router.navigate(['/home']);
  }
}
