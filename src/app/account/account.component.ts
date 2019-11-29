import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  selectedItem = 'list'
  validateForm: FormGroup;
  validateForm2 : FormGroup;
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  submitForm2(): void {
    for (const i in this.validateForm2.controls) {
      this.validateForm2.controls[i].markAsDirty();
      this.validateForm2.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder, private fb2 :FormBuilder ) { }
  
  changeItem(x: string):void {
    this.selectedItem = x
  }

  ngOnInit():void {

    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });

    this.validateForm2 = this.fb2.group({
      namaLengkap: [null, [Validators.required]],
      noWA: [null, [Validators.required]],
    });

  }

}
