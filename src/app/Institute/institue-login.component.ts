import { Component } from '@angular/core'
import { Institute } from './institute';
import { InstituteLoginService } from './institute-login-service';
import { Router } from '@angular/router';

@Component({
    selector: 'institute-login',
    templateUrl: './institute-login.component.html',

})
export class InstituteLoginComponent {
    response:String;
    error:String="";

    institute:Institute=new Institute();

    constructor(public instituteLoginService: InstituteLoginService, private r: Router) {

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