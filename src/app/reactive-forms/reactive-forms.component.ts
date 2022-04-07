import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  loginForm: FormGroup;
  dataa: any;

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    // first method(Direct method) of setting values

    // this.loginForm = this.fb.group({
    //   username: new FormControl('john Doe'),
    //   password: new FormControl('qwertyuiop'),
    //   memberType: new FormControl('permanent member'),
    //   textarea: new FormControl('this is a msg'),
    //   checkbox: new FormControl('true'),
    // });

    this.loginForm = this.fb.group({
      username: new FormControl("",[Validators.minLength(10),Validators.maxLength(12),Validators.required]),
      password: new FormControl("",[Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$")]),
      memberType: new FormControl(),
      textarea: new FormControl(),
      checkbox: new FormControl("",[Validators.required]),
    });
    console.log(this.loginForm);
    this.loginForm.valueChanges.subscribe((data) => {
      this.dataa = data;
      console.log(this.dataa);
    });
  }
  onSubmit() {
    console.log(this.dataa);
    console.log(this.loginForm.value);
  }
  loadValues() {
    let obj = {
      username: 'john Doe',
      password: 'qwertyuiop',
      memberType: 'permanent member',
      textarea: 'this is a msg',
      checkbox: 'true',
    };

    this.loginForm.setValue(obj);
  }
  reset() {
    this.loginForm.reset();
  }
}
