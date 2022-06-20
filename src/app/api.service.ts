import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }
 getall(path:string){
 return this.http.get(path)

 }
//  poststate(data:any){
//    return this.http.post<any>(" http://awsmaster.mahamining.com/master/states/GetState",data)
//  }
}

