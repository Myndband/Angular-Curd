import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { userModal } from '../model/user';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-all-in-one',
  templateUrl: './all-in-one.component.html',
  styleUrls: ['./all-in-one.component.scss']
})
export class AllInOneComponent implements OnInit {

  formValue!:FormGroup;
  usrModalObj: userModal = new userModal();
  showAdd!:boolean;
  showUpdate!:boolean;
  Data: any;
  constructor(private api:ApiService,private formbuilder: FormBuilder,) { }

  reader:any;
  ngOnInit(): void {
    this.fetchgetData();
     this.formValue = this.formbuilder.group({
      avatar:[''],
      name: [''],
      email: [''],
      phone: [''],
      password: [''],
      username: [''],
    });

    // image upload
    let fileInput: any = document.getElementById('fileInput');
    fileInput.addEventListener('change', (e: any) => {
      let file = fileInput.files[0];
      this.reader = new FileReader();
      this.reader.addEventListener('load', () => {
        console.log(this.reader.result);
      });
      this.reader.readAsDataURL(file);
    });
  }

  fetchgetData(){
    this.api.getData().subscribe((resp)=>{
      this.Data = resp;
    },
    (error)=>{
      console.log(error);
    })
  }
  fetchdeleteData(data:any){
    if(confirm("Are you sure to delete ?? "))
    this.api.deleteData(data.id).subscribe((resp)=>{
      console.log(resp);
      alert('Data deleted succesfully');
      this.fetchgetData();
      window.location.reload();
    },
    (error)=>{
      console.log(error);
    })
  }
      // all in one post and edit
      clickAddUser(){
        this.formValue.reset();
        this.showAdd=true;
        this.showUpdate=false;
      }
      postuserDetails(){
        console.log('Inside posting');
        // this.reader.result = this.formValue.value.avatar;
          this.usrModalObj.avatar = this.reader.result;        
          this.usrModalObj.name = this.formValue.value.name;
          this.usrModalObj.email = this.formValue.value.email;
          this.usrModalObj.password = this.formValue.value.password;
          this.usrModalObj.username = this.formValue.value.username;
          this.usrModalObj.phone = this.formValue.value.phone;
        this.api.postData(this.usrModalObj)
        .subscribe(resp=>{
          console.log(resp);
          alert("Data Added Successfully");
          let ref = document.getElementById('cancel')
          ref?.click();
          this.formValue.reset();
          this.fetchgetData();
        },
        (err)=>{
          alert("Something Went Wrong");
        }
        )
      }
      // edit
      onEdit(data:any){
        this.showAdd=false;
        this.showUpdate=true;
        this.usrModalObj.id=data.id;
        this.formValue.controls['avatar'].setValue(data.avatar);
        this.formValue.controls['name'].setValue(data.name);
        this.formValue.controls['email'].setValue(data.email);
        this.formValue.controls['phone'].setValue(data.phone);
        this.formValue.controls['password'].setValue(data.password);
        this.formValue.controls['username'].setValue(data.username);
      }
      editUser(){
        this.usrModalObj.avatar=this.formValue.value.avatar;
        this.usrModalObj.name=this.formValue.value.name;
        this.usrModalObj.email=this.formValue.value.email;
        this.usrModalObj.phone=this.formValue.value.phone;
        this.usrModalObj.password=this.formValue.value.password;
        this.usrModalObj.username=this.formValue.value.username;
        this.api.updateData(this.usrModalObj,this.usrModalObj.id)
        .subscribe(resp=>{
          console.log(resp);
          alert("Data updated Successfully")
          let ref = document.getElementById('cancel')
          ref?.click();
          this.formValue.reset();
          this.fetchgetData();
        })
        
        }
}
