import { Component, OnInit } from '@angular/core';
import { WebService } from '../service/web.service';
import { NgForm } from '@angular/forms';
import { dataModal } from '../model/data';
@Component({
  selector: 'app-allin-one',
  templateUrl: './allin-one.component.html',
  styleUrls: ['./allin-one.component.scss']
})
export class AllinOneComponent implements OnInit {
  Data: any;
  formvalue!:NgForm;
  showUpdate:boolean=false;
  showAdd:boolean=true;
  DataModalObj = {
      name: "",
      email: "",
      phone: "",
      password: "",
      username: "",
  }
  constructor(private web:WebService) { }

  ngOnInit(): void {
    this.fetchgetData();
  }

  fetchgetData(){
    this.web.getData().subscribe((resp)=>{
      this.Data = resp;
    },
    (error)=>{
      console.log(error);
    })
  }
  fetchdeleteData(data:any){
    this.web.deleteData(data.id).subscribe((resp)=>{
      console.log(resp);
      alert('Data deleted succesfully');
      window.location.reload();
    },
    (error)=>{
      console.log(error);
    })
  }
              // post and edit
  addfetchData(data:any){
    this.web.postData(data).subscribe((resp)=>{
      console.log(resp);
      alert('Data added succesfully');
      window.location.reload();
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formvalue.reset();
    },
    (err) => {
      console.log(err);
      alert("Something Went Wrong" + err);
    }
  );
  }
  edit(data: dataModal) {
    this.showUpdate = true;
    this.showAdd=false;
    this.DataModalObj = data;
  }
  clickAddUser(){
    this.formvalue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  fetchupdateData() {
    this.web.updateData(this.DataModalObj).subscribe(
      (resp) => {
         console.log(resp);
         alert("Data updated Successfully");
          window.location.reload();
          let ref = document.getElementById('cancel')
          ref?.click();
          this.formvalue.reset();
      },
      (err) => {
        console.log(err);
        alert("Something Went Wrong");
      }
    );
  }
}
