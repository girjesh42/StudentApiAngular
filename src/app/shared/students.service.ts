import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  readonly sUri ='https://localhost:44358/api/students';
  sList:Student[];
  constructor(private objhttp:HttpClient) { }

  studentList(){
    this.objhttp.get(this.sUri).toPromise().then(res=>this.sList=res as Student[]);
  }

}
