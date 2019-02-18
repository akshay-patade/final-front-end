import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Scholarship } from './scholarship';

@Injectable()

export class ScholarshipApplicationService {
    scholarships: Scholarship = new Scholarship();

    constructor(private http: HttpClient) {

    }
    sendToServer(scholarships) {
        //our code to be communicated with the server will be here
        let url = "http://localhost:8085/student/add";
        return this.http.post(url, scholarships);

    }
}