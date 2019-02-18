import { Component } from '@angular/core';
import { Scholarship } from './scholarship';
import { ScholarshipApplicationService } from './scholarship-application.service';

@Component({
    selector: 'scholarship-application',
    templateUrl: './scholarship-application.component.html',

})
export class ScholarshipApplicationComponent {
    scholarships: Scholarship = new Scholarship();
    response: string;
    checkBox: Boolean;
    array={msg:""};

    constructor(public ss: ScholarshipApplicationService) {

    }

    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }

    check(regform) {
        let confirm = true;
    }

       /*  //check whether checkbox is checked or not
        else if (!this.checkBox) {
            confirm = false;
            this.array['msg'] = "Please check the above checkbox";
        }
 
        //Send the data to the database
        if (confirm) {
            this.ss.sendToServer(this.scholarships).subscribe(
                data => {
                    this.response = data['status'];
                }
            )
        }
 */

    }
