import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { posts } from '../../_model/posts';
import { Student } from '../../_model/customer';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) {

   }

   getAll(){
    return this.http.get<Student[]>('http://127.0.0.1:8000/student');
   } 

   GetAllCustomer(){
    return this.http.get<Student[]>('http://127.0.0.1:8000/student');
   }
}
