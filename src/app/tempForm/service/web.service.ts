import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  url: string = 'http://localhost:3000';
  constructor(public http: HttpClient) {}


  
  //GET
  getData() {
    return this.http.get<any>(this.url+"/User").pipe(map((resp)=>{
      return resp
    }))
  }
  //POST
  postData(data:any) {
    return this.http.post<any>(this.url+"/User", data);
  }
  // DELETE
  deleteData(id:any){
    return this.http.delete<any>(this.url+"/User/"+id);
  }
  
  // UPDATE
  // for individual
  updateData(data:any){
    return this.http.put<any>(this.url+"/User/"+data.id,data);
  }
  // for seperately
  updatedata(data:any,id:any){
    return this.http.put<any>(this.url+"/User/"+id,data);
  }
  getupdateDataById(id:any){
    return this.http.get<any>(this.url+"/User/"+id);
   }

}
