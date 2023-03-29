import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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
    return this.http.post<any>(this.url+"/User", data).pipe(
      map((resp) => {
        return resp;
      },
      catchError((error) => {
        return throwError(error);
      }))
    );
  }
  // DELETE
  deleteData(id:any){
    return this.http.delete<any>(this.url+"/User/"+id);
  }
  // UPDATE
  getupdateDataById(id:any){
    return this.http.get<any>(this.url+"/User/"+id);
   }
  updateData(data:any,id:any){
    return this.http.put<any>(this.url+"/User/"+id,data);
  }
}
