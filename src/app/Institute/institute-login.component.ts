
import { OnInit, Component } from '@angular/core'
import { Router } from '@angular/router';
import { Institute } from './institute';
import { InstituteLoginService } from './institute-login-service';



@Component({
    selector: 'institute-login',
    templateUrl: './institute-login.component.html',

})
export class InstituteLoginComponent {
    response: string;
    che: Boolean;
    error:String="";

    institute:Institute=new Institute();

    constructor(public instituteLoginService: InstituteLoginService, private r: Router) {

    }

    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }

    add(regform) {
        this.instituteLoginService.RetriveFromServer(this.institute).subscribe(
            data => {
                this.response=data['message'];
                console.log(this.response);
                if (this.response=="true") {
                    this.r.navigate(["/institute-dashboard"]);
                }
                else {
                this.error="Invalid username or password please try again";
                console.log(this.error);
                }
            });
        
       
    }
}





