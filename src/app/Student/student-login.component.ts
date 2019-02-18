
import { OnInit, Component } from '@angular/core'
import { Student } from './student';
import { StudentLoginService } from './student-login-service';
import { Router } from '@angular/router';



@Component({
    selector: 'student-login',
    templateUrl: './student-login.component.html',

})
export class StudentLoginComponent {
    response: string;
    che: Boolean;
    error:String="";

    students: Student = new Student();

    constructor(public studentLoginService: StudentLoginService, private r: Router) {

    }

    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }

    add(regform) {
        this.studentLoginService.RetriveFromServer(this.students).subscribe(
            data => {
                this.response=data['message'];
                console.log(this.response);
                if (this.response=="true") {
                    localStorage.setItem('adharNo', this.students.adharNo);
                    this.r.navigate(["/student-dashboard"]);
                }
                else {
                this.error="Invalid username or password please try again";
                console.log(this.error);
                }
            });
        
       
    }
}





