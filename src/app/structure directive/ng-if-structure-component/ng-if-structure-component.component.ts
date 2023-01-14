import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-structure-component',
  templateUrl: './ng-if-structure-component.component.html',
  styleUrls: ['./ng-if-structure-component.component.scss']
})
export class NgIfStructureComponentComponent implements OnInit {

  constructor() { }
  isActive:boolean = false;
  isLoggin:boolean = true;
  userName:string = "Mahmoud Ramadan"
  ngOnInit(): void {
  }

}
