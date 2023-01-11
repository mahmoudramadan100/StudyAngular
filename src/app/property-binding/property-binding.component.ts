import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }
  myId:string="item01";
  isDisabled:boolean=true;
  ngOnInit(): void {
  }

}
