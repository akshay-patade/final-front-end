
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable()

export class StudentLoginService {

    constructor(private http: HttpClient) {

    }
    RetriveFromServer(students) {
        //our code to be communicated with the server will be here
        let url = "http://localhost:8085/student/verify";
        return this.http.post(url, students);

    }

}