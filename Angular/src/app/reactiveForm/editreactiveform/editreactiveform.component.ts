import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { userModal } from '../model/user';

@Component({
  selector: 'app-editreactiveform',
  templateUrl: './editreactiveform.component.html',
  styleUrls: ['./editreactiveform.component.scss']
})
export class EditreactiveformComponent implements OnInit {
  usrModalObj: userModal = new userModal();
  editForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    phone :new FormControl(''),
    password : new FormControl(''),
    username :new FormControl('')
  })
  mydata: any = '';
  ID:any=this.route.snapshot.params.id;
  Data: any;
  constructor(public api: ApiService,private route:ActivatedRoute,private router:Router,private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.gettingData();
    // this.editForm = this.formbuilder.group({
    //   name: [''],
    //   email: [''],
    //   phone: [''],
    //   password: [''],
    //   username: [''],
    // });
    this.Data=this.api.temp;
  }
     // for diferent method 
  update(){
    this.api.updatedata(this.Data).subscribe((resp)=>{
      console.log(resp);
      alert("Data updated succesfully")
      location.assign('/reactive')
    })
  }



  updatingData(){
    this.api.updateData(this.editForm.value,this.ID).subscribe( (resp)=> {
      console.log(resp);
      alert("Data updated succesfully")
      location.assign('/reactive')
    })
    // setTimeout(() => {
    //   this.router.navigate(['/reactive'])      
    // },3000);

  }
  gettingData() {
     this.api.getupdateDataById(this.ID).subscribe((resp) => {
     this.editForm = new  FormGroup({
      name : new FormControl(resp['name']),
      email : new FormControl(resp['email']),
      username : new FormControl(resp['username']),
      phone : new FormControl(resp['phone']),
      password : new FormControl(resp['password'])
                                   })
      
    })
  }
}



                    // for long coders use

// usrModalObj: userModal = new userModal();
// editForm!: FormGroup;
// mydata: any = '';
// ID:any=this.route.snapshot.params.id;
// constructor(public api: ApiService,private route:ActivatedRoute,private router:Router) { }

// ngOnInit(): void {
//   this.gettingData(this.ID)
// this.editForm = this.formbuilder.group({
    //   name: [''],
    //   email: [''],
    //   phone: [''],
    //   password: [''],
    //   username: [''],
    // });
// }

// updatingData(){
//   console.log("updated data",this.editForm.value);
//   this.api.updateData(this.ID,this.editForm.value).subscribe( (resp)=> {
//     alert("Data updated successfully ...")
//     console.log(resp);
//   })
// }
// gettingData(id:any) {
//   console.log('Getting data');
//   this.api.getupdateDataById(id).subscribe((resp) => {
//     this.mydata = resp;
//     console.log("with id",resp);
//   this.editForm.controls['name'].setValue(resp.name);
//   this.editForm.controls['email'].setValue(resp.email);
//   this.editForm.controls['username'].setValue(resp.username);
//   this.editForm.controls['phone'].setValue(resp.phone);
//   this.editForm.controls['password'].setValue(resp.password);      
//   },
//   (err)=>{
//     console.log(err)
//   });
// }
// }




