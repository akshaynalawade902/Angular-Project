

import { Component, OnInit } from "@angular/core";
import { StudentService } from "./services/student.service";


@Component({
templateUrl : './app/gallery.component.html'

})
export class GalleryComponent implements OnInit{

    listOfImages : any=[] ;     

    ngOnInit(): void {
       
        this.listOfImages= this._studentservice.getAllImages();
        console.log(this.listOfImages);
    }
    
    constructor(private _studentservice : StudentService){


    }
}