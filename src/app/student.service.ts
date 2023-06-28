import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';
import { environment } from 'src/environments/environment';





@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getStudent(): Observable<Student[]> {
    return this.http.get<Student[]> (`${this.apiServerUrl}/api/student`);
  }
  public addStudent(student: Student): Observable<Student> {
    return this.http.post<Student> (`${this.apiServerUrl}/api/add_student`, student);
  }
  public updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student> (`${this.apiServerUrl}/api/update`, student);
  }
  public deleteStudent(theId: number): Observable<void> {
    return this.http.delete<void> (`${this.apiServerUrl}/api/delete_student/${theId}`);
  }
  public getLogin(): Observable<Student[]> {
    return this.http.get<Student[]> (`${this.apiServerUrl}/api/student`);
  }



}
  
