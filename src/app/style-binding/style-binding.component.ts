import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent implements OnInit {

  constructor() { }
  textColor:string="red";
  hasError:boolean=false;
  fontStyleProperty:string="italic"

  myStyle={
    color:this.textColor,
    fontStyle:this.fontStyleProperty
  }

  ngOnInit(): void {
  }

}
