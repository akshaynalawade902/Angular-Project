import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StudentService } from "./services/student.service";




@Component({
    selector: 'my-gymservicecomponent',
    templateUrl: './app/gymservice.component.html',

})
export class GymServiceComponent {

    studentId: any;

    student: any;

    constructor(private _activteRoute: ActivatedRoute, private _studentService : StudentService) {
        this._activteRoute.params.subscribe(data => {
            this.studentId = data['id'];


            this.student = this._studentService.getStudentById(this.studentId);
        })
    }



}
