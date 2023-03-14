import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, throwError, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { dataModal } from '../model/data';

@Injectable({
  providedIn: 'root',
})
export class WebService {
  url: string = 'http://localhost:3000';
  constructor(public http: HttpClient) {}

  //GET
  getData(): Observable<Object> {
    return this.http.get<dataModal>(this.url + '/User').pipe(
      map((responseData: any) => {
        const postArray: dataModal[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({ ...responseData[key], id: key });
          }
        }
        return postArray;
      }),
      catchError((errorRes) => {
        console.log('error from catchError ' + errorRes);
        return throwError(errorRes);
      })
    );
  }
  //POST
  postData(data: any) {
    return this.http.post<any>(this.url + '/User', data);
  }
  // DELETE
  deleteData(id: any) {
    return this.http.delete<any>(this.url + '/User/' + id);
  }

  // UPDATE

  // for individual
  temp: any;
  setTemp(data: any) {
    this.temp = data;
  }
  updateData(data: any) {
    return this.http.put<any>(this.url + '/User/' + data.id, data);
  }

  // for seperately
  updatedata(data: any, id: any) {
    return this.http.put<any>(this.url + '/User/' + id, data);
  }
  getupdateDataById(id: any) {
    return this.http.get<any>(this.url + '/User/' + id);
  }
}
