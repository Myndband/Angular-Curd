import { Component, OnInit } from '@angular/core';
import { WebService } from '../service/web.service';

@Component({
  selector: 'app-addngform',
  templateUrl: './addngform.component.html',
  styleUrls: ['./addngform.component.scss']
})
export class AddngformComponent implements OnInit {

  constructor(private web:WebService) { }

  ngOnInit(): void {
  }
  addfetchData(data:any){
    this.web.postData(data).subscribe((resp)=>{
      console.log(resp);
      alert('Data added succesfully');
      location.assign('/ng')
    },
    (err) => {
      console.log(err);
      alert("Something Went Wrong" + err);
    }
  );
  }
}
