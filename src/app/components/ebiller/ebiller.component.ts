import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms'

@Component({
  selector: 'app-ebiller',
  templateUrl: './ebiller.component.html',
  styleUrls: ['./ebiller.component.css']
})

export class EbillerComponent implements OnInit {

  //create reactive form FormGroup:
  userForm!: FormGroup;
  submitted = false;

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      txtMobile: ['', Validators.pattern("^((\\07-?)|0)?[0-9]{10}$")],
      txtAmount: ['', [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    });
  }
  
  saveForm() {
    //this.userForm.controls['txtMobile'].reset()
    console.log(this.userForm.value);
    this.userForm.controls['txtAmount'].setValue(this.userForm.controls['txtAmount'].value)
    this.userForm.controls['txtMobile'].reset()
    if (!this.userForm.valid) {
      // this.userForm.controls['txtAmount'].setValue(this.userForm.controls['txtAmount'].value)
      return;
    }

    if(this.userForm.valid){
      console.log("The form has been submitted succcessfully: ");
    }

    

  }

  get getform() {
    return this.userForm.controls;
  }
  
  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }

}
