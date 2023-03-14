import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dynamic } from '../model/dynamic';
import { DynamicService } from '../services/dynamic.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
})
export class DynamicComponent implements OnInit {
  constructor(private fb: FormBuilder,private api:DynamicService) {
 
    this.userForm = this.fb.group({
      id:[''],
      name: [''],
      username: [''],
      email: [''],
      phone: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
    this.fetchGETData();
  }

  userForm: FormGroup;
  listData:any;
  fetchGETData(){
     this.listData = this.api.getAll()
  }

  clickAddUser(){
    this.userForm.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  public AddUser(): void {
    this.listData.push(this.userForm.value);
    alert("Data Added Successfully")
    this.userForm.reset();
  }

  public fetchdeleteData(element: any): void {
    this.listData.forEach((value: any, index: any) => {
      if (value == element) this.listData.splice(index, 1);
    });
    alert("Data Deleted Successfully")
  }

  showUpdate:boolean=false;
  showAdd:boolean=true;

  selectedData:any={
    id: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    username: '',
  };

  public showDetils(data:any): void {
    this.selectedData = Object.assign({},data)
    this.showUpdate = true;
    this.showAdd = false;
  }

  public updateUser(): void {
    Object.assign(this.listData.find((e: any)=> e.id == this.selectedData.id),this.selectedData)
    alert("Data Updated Successfully")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.userForm.reset();
  }
}