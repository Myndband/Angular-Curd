import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RolebasedService } from '../services/rolebased.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  warning="Please enter valid data.";
  credential="Invalid credentials";
  error="Please contact Admin or InActive User";

   constructor(
    private builder: FormBuilder, 
    private service: RolebasedService,
    private router: Router
    ) {
      sessionStorage.clear();
    }

  ngOnInit(): void {
  }
  result: any;

  loginform = this.builder.group({
    id: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });

  proceedlogin() {
    if (this.loginform.valid) {
      this.service.GetUserbyCode(this.loginform.value.id).subscribe(item => {
        this.result = item;
        if (this.result.password === this.loginform.value.password) {
          if (this.result.isactive) {
            sessionStorage.setItem('username',this.result.id);
            sessionStorage.setItem('role',this.result.role);
            this.router.navigate(['']);
          } else {
            alert(this.error)
          }
        } else {
          alert(this.credential)     
        }
      });
    } else {
      alert(this.warning)
    }
  }

}
