import { Component, Input, OnInit } from '@angular/core';
import { Resource } from "../typeDefs/typedefs"

@Component({
  selector: 'all-resources',
  template: `
  <div>
    <h2 ng-init="newPanel()"></h2>
  </div>
  `
})
export class AllResourcesComponent implements OnInit {
  @Input()
  resauce: Object

  constructor() { }

  ngOnInit() {
  }

}
