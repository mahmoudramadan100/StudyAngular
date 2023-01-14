import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  
  @ViewChild(ChildComponent) child:ChildComponent = new ChildComponent();
  fullName:string = "mahmoud ramadan";
  massegeFromChild:any;

  ngOnInit(): void {
    // console.log(this.child.sendData())
  }
  ngAfterViewInit() {
    console.log(this.child.showMsg())
  }

}
