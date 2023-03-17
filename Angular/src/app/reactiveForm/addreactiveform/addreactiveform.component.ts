import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userModal } from '../model/user';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-addreactiveform',
  templateUrl: './addreactiveform.component.html',
  styleUrls: ['./addreactiveform.component.scss'],
})
export class AddreactiveformComponent implements OnInit {
  submitted:boolean=false;
  addForm = new FormGroup({
    name : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z][a-zA-Z\\s]+$/),Validators.minLength(3),Validators.maxLength(10)]),
    email : new FormControl('',[Validators.required]),
    phone :new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
    username :new FormControl('',[Validators.required])
  })
  constructor(private formbuilder: FormBuilder,private router:Router, public api: ApiService) {}
  ngOnInit(): void {
    // this.addForm = this.formbuilder.group({
    //   name: [''],
    //   email: [''],
    //   phone: [''],
    //   password: [''],
    //   username: [''],
    // });
  }
  get add(){
    return this.addForm.controls
   }
  postingData() {
    // validation
    this.submitted = true
    if(this.addForm.invalid){
      return
    }
    console.log('Inside posting');
    this.api.postData(this.addForm.value).subscribe(
      (res) => {
        console.log(res);
        alert('Data posted successfully ...');
        location.assign('/reactive')
      },
      (err: any) => {
        alert('Something went wrong ...');
      })
       setTimeout(() => {
       this.router.navigate(['/reactive'])      
       },3000);
  }
}

                        // for long coders object use

// ngOnInit(): void {
//   this.addForm = this.formbuilder.group({
//     name: [''],
//     email: [''],
//     phone: [''],
//     password: [''],
//     username: [''],
//   });
// }

// postingData() {
//   console.log('Inside posting');
//   this.usrModalObj.name = this.addForm.value.name;
//   this.usrModalObj.email = this.addForm.value.email;
//   this.usrModalObj.password = this.addForm.value.password;
//   this.usrModalObj.username = this.addForm.value.username;
//   this.usrModalObj.phone = this.addForm.value.phone;
//   this.api.postData(this.usrModalObj).subscribe(
//     (res) => {
//       console.log(res);
//       alert('Data posted successfully ...');
//     },
//     (err: any) => {
//       alert('Something went wrong ...');
//     }
//   ),
//     this.gettingData();
// }

// gettingData() {
//   console.log('Getting data');
//   this.api.getData().subscribe((res) => {
//     this.mydata = res;
//   });
// }
// }
