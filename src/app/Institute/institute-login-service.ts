
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class InstituteLoginService {

    constructor(private http: HttpClient) {

    }
    RetriveFromServer(institute) {
        //our code to be communicated with the server will be here
        let url = "http://localhost:8085/institute/verify";
        return this.http.post(url, institute);

    }

}