import { Component, Input, OnInit } from '@angular/core';
import { Resource } from "../typeDefs/typedefs"

@Component({
  selector: 'all-resources',
  template: `
  <div style="border:1px solid black; text-allign: center;">
    <h2 ng-init="newPanel()"></h2>
    <span><b>Article: {{ resauce.title }}</b> by {{ resauce.author.userName }}</span>
    <h5>Author: {{resauce.content}}</h5>
  </div>
  `,
  styleUrls: ['./all-resources.component.css']
})
export class AllResourcesComponent implements OnInit {
  @Input()
  resauce: Object

    // public: string = ''
  constructor() { }

  ngOnInit() {
  }

}
