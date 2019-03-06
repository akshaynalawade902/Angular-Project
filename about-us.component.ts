import { Component } from "@angular/core";

@Component({
    selector: 'my-aboutus',
    templateUrl: './app/about-us.component.html'
})
export class AboutUsComponent {

    structures: any = [
        { Month: 'For 3 months', TrainerName: 'Vijay Patil', Fees: '4000/-' },
        { Month: 'For 6 months', TrainerName: 'Sanjay Raut', Fees: '7500/-' },
        { Month: 'For 12 months', TrainerName: 'Vishal Pawar', Fees: '1400/-' }
    ];








}