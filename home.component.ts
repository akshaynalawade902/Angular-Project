import { Component, OnInit } from "@angular/core";
import { StudentService } from "./services/student.service";
import { Router } from "@angular/router";



@Component({
  selector: 'my-home',
  templateUrl: './app/home.component.html',
  // styleUrls : ['./app/home.component.css']
})
export class HomeComponent implements OnInit {

  students: any;

  ngOnInit() {
    this.students = this._studentService.getAllStudents();
  }


  constructor(private _studentService: StudentService,private _router : Router) {

  }

  navigate(id) {
   // console.log(id);
      this._router.navigateByUrl('/gymservice/'+id);
  }
}