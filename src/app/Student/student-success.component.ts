import { Component, Injectable } from '@angular/core'

@Component({
    selector: 'student-success',
    templateUrl: './student-success.component.html',

})


export class StudentSuccessComponent {
    success:String=localStorage.getItem("adharNo"); 
}
