import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-ways-binding',
  templateUrl: './two-ways-binding.component.html',
  styleUrls: ['./two-ways-binding.component.scss']
})
export class TwoWaysBindingComponent implements OnInit {

  constructor() { }
  dataUserEntered='default data'
  ngOnInit(): void {
  }

}
