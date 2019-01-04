import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  operationForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.operationForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]],
      operationDescription: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
    });
  }
  
   // convenience getter for easy access to form fields
   get f() { return this.operationForm.controls; }

   onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.operationForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.operationForm.value))
}

}
