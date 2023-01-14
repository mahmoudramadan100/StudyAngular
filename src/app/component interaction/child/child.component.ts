import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() parentData:any;
  @Output() childEvent=new EventEmitter();
  ngOnInit(): void {
  }
    sendData() {
      this.childEvent.emit('hello from child')
    }

    showMsg() {
      console.log("i'm child")
    }
}
