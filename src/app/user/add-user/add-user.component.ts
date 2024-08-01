import { Component } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  form: FormGroup;
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get(' confirmPassword')?.value;

    return password === confirmPassword ? null : { mismatch: true };
  }
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: this.formBuilder.group({
        first: ['Luke', Validators.required],
        last: ['Skywalker', Validators.required],
      }),
      contact: this.formBuilder.group({
        email: [],
        phone: [],
      }),
      password: this.formBuilder.group({
        password: [],
        confirm: [],
      }),
    });
    password:this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
     }
    , {
      validator: this.passwordMatchValidator
  
    }
  )
  }
  submit() {
    console.log('reactive form submit', this.form.value);
  }
}
