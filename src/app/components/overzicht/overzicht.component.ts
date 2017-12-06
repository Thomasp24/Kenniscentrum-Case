import { Component } from '@angular/core';
import { Http } from '@angular/http';
//import { CursusInstantie } from '../../../classes/CursusInstantie';

@Component({
    selector: 'overzicht',
    templateUrl: './overzicht.component.html'
})
export class OverzichtComponent {

   
//    cursusInstanties: CursusInstantie[];

    constructor(private http: Http) {
        this.getCursussen();
    }

    getCursussen() {
       /* this.http.get('/api/Overzicht').subscribe(result => {
            console.log(result);
            //this.cursusInstanties = result.json() as CursusInstantie[];
        }, error => console.error("##Error - " + error));*/
    }
}/*
<table class="table" *ngIf="cursusInstanties.length != 0">
        <thead>
            <th>Start</th>
            <th>Duur</th>
            <th>Titel</th>
            <th>#cursisten</th>
        </thead>
        <tbody>
            <tr ng-repeat="instantie in cursusInstanties">
                <td></td>
                <td></td>
                <td></td>
                <td>#</td>
            </tr>
        </tbody>
    </table>


*/
