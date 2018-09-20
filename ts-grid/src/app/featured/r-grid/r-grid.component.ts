import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-r-grid',
  templateUrl: './r-grid.component.html',
  styleUrls: ['./r-grid.component.scss']
})
export class RGridComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }


  // INIT
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName : ['', Validators.required],
      lastName  : ['', Validators.required],
      email     : ['', [Validators.required, Validators.email]],
      password  : ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  // SUBMIT
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }

}
