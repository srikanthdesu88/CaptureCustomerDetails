import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-capture-details',
  templateUrl: './capture-details.component.html',
  styleUrls: ['./capture-details.component.css']
})
export class CaptureDetailsComponent {

  userDetailsForm: FormGroup;

  @Output() userDetailsEmitter = new EventEmitter();

  constructor(public fb: FormBuilder) {
    this.userDetailsForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]]
    });
  }
  
  onSubmit(): void{
    if(this.userDetailsForm.valid){
      console.log("User Details validated:: " + JSON.stringify(this.userDetailsForm.value));
      this.userDetailsEmitter.emit(this.userDetailsForm.value);

      this.userDetailsForm.reset();
    }    
  }
}