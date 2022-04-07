import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mat-temp-form',
  templateUrl: './mat-temp-form.component.html',
  styleUrls: ['./mat-temp-form.component.css']
})
export class MatTempFormComponent implements OnInit {

username:any
password:any
date:any
cc:any
memberType:any
phone:any
textarea:any
checkbox:any

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formValue:NgForm){
    this.username=formValue.value.username
    this.password=formValue.value.password
    this.date=formValue.value.date
    this.cc=formValue.value.cc
    this.memberType=formValue.value.memberType
    this.phone=formValue.value.phone
    this.textarea=formValue.value.textarea
    this.checkbox=formValue.value.checkbox

  }
  loadValues(formValue:NgForm){
    let obj={username:"Neeraj pant",
      password:1234567890,
      date:new Date(),
      cc:"+91",
      memberType:'Local member',
      phone:"9876543210",
      textarea:"this is a test message",
      checkbox:true
    }
    formValue.setValue(obj)

  }
reset(formValue:NgForm){
  formValue.reset()
}


}
