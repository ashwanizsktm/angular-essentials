import { Component, OnInit } from '@angular/core';
import { canComponentLeave } from '../../guards/unsaved-changes.guard';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
})
export class AdduserComponent implements OnInit, canComponentLeave {

  formStatus:boolean=false;

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['',Validators.required],
    });

    this.checkvalidation();
  }

  onaddUserSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      this.formStatus = true;
      return true;

    } else{
      this.formStatus = false;
      return false;
    }
  }

  checkvalidation() {
    if(!this.profileForm.get('name')?.touched && this.profileForm.get('name')?.dirty) {
      console.log("dirty and touched!");
   }   else {
     console.log("Not dirty and touched!");
   }
  }

  canLeave(): boolean{
   if(!(this.profileForm.valid || (this.profileForm.get('name')?.touched && this.profileForm.get('name')?.dirty))){
     return window.confirm("You have some unsaved changes! Do you want to navigate other route?")
   } else {
     return true;
   }
  }
}
