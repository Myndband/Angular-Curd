import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WebService } from '../service/web.service';

@Component({
  selector: 'app-viewngform',
  templateUrl: './viewngform.component.html',
  styleUrls: ['./viewngform.component.scss']
})
export class ViewngformComponent implements OnInit {

  Data: any;
  constructor(private web:WebService,private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchgetData();
  }

  fetchgetData(){
    this.web.getData().subscribe((resp)=>{
      this.Data = resp;
      console.log(resp);
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

  //update 
  edit(e:any){
    this.web.setTemp(e);
  }
  
}
