import { Component } from '@angular/core'

import { InstituteService } from './institute-service';
import { Institute } from './institute';
import { InstituteSuccessComponent } from './institute-success.component';
import { Router } from '@angular/router';


@Component({
    selector: 'institute-registration',
    templateUrl: './institute-registration.component.html',

})
export class InstituteRegistrationComponent {
    institutes: Institute = new Institute();
    response: Boolean;
    comppass: string;
    address1: string;
    address2:string;
    array = { password: "", msg: "" };

    constructor(private is: InstituteService, private r:Router ) {

    }


    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }

    check(instituteForm) {
        this.institutes.instituteAddress=this.address1+ " " +this.address2;
        console.log(this.institutes.instituteAddress);
        console.log(this.institutes.instituteAddress);
        let confirm = true;

        if (this.comppass != this.institutes.password) {
            confirm = false;
            this.array['password'] = "Pasword does not match";
        }

        if (confirm) {
            this.is.sendToServer(this.institutes).subscribe(
                data => {
                    this.response = data['status']
                }
            );
            this.r.navigate(["/institute-success"]);
            // }

            // else {
            //     this.r.navigate(["/error-message"]);
            // }
        }
    }
}