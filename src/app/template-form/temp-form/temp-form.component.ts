import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css']
})
export class TempFormComponent implements OnInit {
  username:any
  password:any
  checkbox:boolean=false
  memberType:any
  textarea:any
  constructor() { }

  ngOnInit(): void {
  }

  login(formValue:NgForm){
    console.log(formValue )
    this.username=formValue.value.username
    this.password=formValue.value.password
    this.checkbox=formValue.value.checkbox
    this.memberType=formValue.value.memberType
    this.textarea=formValue.value.textarea

    console.log(this.username)
    console.log(this.password)
    console.log(this.checkbox)
    console.log(this.memberType)
    console.log(this.textarea)
  }
  reset(formValue:NgForm){
    formValue.reset();
    // formValue.resetForm()
  }
  loadValues(formValue:NgForm){
    let obj={
      username:"Neeraj",
      password:12345678900098765432,
      checkbox:true,
      memberType:"permanent member",
      textarea:"this is the msg"
    }
    formValue.setValue(obj)

  }
}
