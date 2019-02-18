import { Component } from '@angular/core'
import { Student } from './student';
import { StudentService } from './student-service';
import { StudentSuccessComponent } from './student-success.component';
import { Router } from '@angular/router';

@Component({
    selector: 'student-registration',
    templateUrl: './student-registration.component.html',

})
export class StudentRegistrationComponent {
    students: Student = new Student();
    success: StudentSuccessComponent;
    uid: string;
    response: string;
    che: Boolean;
    confirmpass: string;
    array = { password: "", msg: "" };

    constructor(public ss: StudentService, private r: Router) {

    }


    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }

    check(regform) {
        console.log("student reg component called");
        let confirm = true;

        //Verify the password
        if (this.confirmpass != this.students.password) {
            confirm = false;
            this.array['password'] = "Pasword does not match";
        }

        //check whether checkbox is checked or not
        else if (!this.che) {
            confirm = false;
            this.array['msg'] = "Please check the above checkbox";
        }

        //Send the data to the database
        if (confirm) {

            var json={
                "adharNo":this.students.adharNo,
                "stateOfDomicile":this.students.stateOfDomicile,
                "district":this.students.district,
                "name":this.students.name,
                "dob":this.students.dob,
                "gender":this.students.gender,
                "mobileNo":this.students.mobileNo,
                "email":this.students.email,
                "bankIfscCode":this.students.bankIfscCode,
                "bankAccNo":this.students.bankAccNo,
                "bankName":this.students.bankName,
                "password":this.students.password,

                "institute":{
                    "instituteCode":this.students.instituteCode
                }

            }

            this.ss.sendToServer(json).subscribe(
                data => {
                    this.response = data['status'];
                }
            )
            localStorage.setItem('adharNo', this.students.adharNo);
            this.r.navigate(["/student-success"]);
        }

    }
}  