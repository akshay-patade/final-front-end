import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Institute } from './institute';


@Injectable()

export class InstituteService {
    institutes: Institute[];

    constructor(private http: HttpClient) {

    }
    sendToServer(institutes) {
        //our code to be communicated with the server will be here
        let url = "http://localhost:8085/institute/add";
        return this.http.post(url, institutes);

    }

}