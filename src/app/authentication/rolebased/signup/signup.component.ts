import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RolebasedService } from '../services/rolebased.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  warning="Please enter valid data.";
  success="Please contact admin for enable access. Registered successfully";
  constructor(
    private builder: FormBuilder, 
    private service: RolebasedService, 
    private router: Router,
    
    ) {

  }

  ngOnInit(): void {
  }
  registerform = this.builder.group({
    id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    role: this.builder.control(''),
    isactive: this.builder.control(false)
  });

  proceedregister() {
    if (this.registerform.valid) {
      this.service.RegisterUser(this.registerform.value).subscribe(result => {
        this.success
        this.router.navigate(['login'])
      });
    } else {
      this.warning
    }
  }

}
