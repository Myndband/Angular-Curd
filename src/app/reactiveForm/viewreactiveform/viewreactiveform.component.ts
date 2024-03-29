import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { userModal } from '../model/user';
// import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

// @UntilDestroy()
// npm i @ngneat/until-destroy
// "@ngneat/until-destroy": "^9.2.3",
@Component({
  selector: 'app-viewreactiveform',
  templateUrl: './viewreactiveform.component.html',
  styleUrls: ['./viewreactiveform.component.scss']
})
export class ViewreactiveformComponent implements OnInit {
  // usrModalObj: userModal = new userModal();
  Data: any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.fetchgetData();
  }

  fetchgetData(){
    this.api.getData().pipe(untilDestroyed(this)).subscribe((resp)=>{
      this.Data = resp;
    },
    (error)=>{
      console.log(error);
    })
  }
  fetchdeleteData(data:any){
    this.api.deleteData(data.id).subscribe((resp)=>{
      console.log(resp);
      alert('Data deleted succesfully');
      window.location.reload();
    },
    (error)=>{
      console.log(error);
    })
  }

}

