import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  url = environment.apiUrl;
  signupForm!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }
  /* method to create user */
  signUp() {
    this.http.post<any>(this.url + '/signup', this.signupForm.value).subscribe(
      (res) => {
        alert('User created');
        this.signupForm.reset();
        this.router.navigate(['login']);
      },
      (err) => {
        alert('something went wrong');
      }
    );
  }
}
