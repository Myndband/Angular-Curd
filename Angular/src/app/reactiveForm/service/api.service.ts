import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
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

  //how to do unit testing?
  // DELETE
  deleteData(id:any){
    return this.http.delete<any>(this.url+"/User/"+id);
  }
  // UPDATE
   // for individual
   temp:any;
   setTemp(data:any){
     this.temp=data;
   }
   updatedata(data:any){
     return this.http.put<any>(this.url+"/User/"+data.id,data);
   }

   // for seperately
  getupdateDataById(id:any){
    return this.http.get<any>(this.url+"/User/"+id);
   }
  updateData(data:any,id:any){
    return this.http.put<any>(this.url+"/User/"+id,data).pipe(map((res) => { 
      console.log(res) 
      return res; 
    }), catchError((error) => {
       console.log(error)
       return throwError(error);}));
  }
}
