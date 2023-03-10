import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from '../service/web.service';

@Component({
  selector: 'app-editngform',
  templateUrl: './editngform.component.html',
  styleUrls: ['./editngform.component.scss']
})
export class EditngformComponent implements OnInit {

  constructor(private web:WebService,private route:ActivatedRoute,private router:Router,) { }
  data:any;
  ID:any=this.route.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.fetchgetupdateDataById();
  }

  fetchgetupdateDataById(){
    this.web.getupdateDataById(this.ID).subscribe((resp)=>{
      this.data=resp;
      console.warn(resp);
  })
  }
  editfetchData(data:any){
    this.web.updatedata(data,this.ID).subscribe((resp)=>{
      console.log(resp);
      alert("Data updated succesfully")
      location.assign('/ng')
    })
  }
}
