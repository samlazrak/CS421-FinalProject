import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Resource } from '../../typeDefs/typedefs';
import { ResourceService } from '../../core/services/resource.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  resources$: Observable<Resource[]>;
  constructor(
    private resourceService: ResourceService
  ) {
    this.resources$ = this.resourceService.resources();
  }

//This creates a new post for the user
newPanel(){

var div = document.createElement('div');
div.className = 'container';
var divRow = document.createElement('div');
divRow.className = 'row';
divRow.style.margin = "20px";
var divColImg = document.createElement('div');
divColImg.className = 'col col-sm-2';

//This is only here to outline users profile picture
divColImg.style.border = "5px solid grey";

var panel = document.createElement('div');
panel.className = 'col col-lg-14';
var card = document.createElement('div');
card.className = 'card';
var cardHeader = document.createElement('div');
cardHeader.className = 'card-header';
cardHeader.innerHTML = 'Featured';
var cardBody = document.createElement('div');
cardBody.className = 'card-body';
var innerDiv = document.createElement('div');
var header = document.createElement('h5');
header.className = 'card-title';
header.innerHTML = "Special title treatment";
var comment = document.createElement('p');
comment.className = 'card-text';
comment.innerHTML = 'With supporting text below as a natural lead-in to additional content.';
var link = document.createElement('a');
link.className = 'btn btn-primary';
link.href = '#';
link.innerHTML = "Go Somewhere";

div.appendChild(divRow);
divRow.appendChild(divColImg);
divRow.appendChild(panel);
panel.appendChild(card);
card.appendChild(cardHeader);
card.appendChild(cardBody);
cardBody.appendChild(innerDiv);
innerDiv.appendChild(header);
innerDiv.appendChild(comment);
innerDiv.appendChild(link);

document.body.appendChild(div);
}
  ngOnInit() {
  }




}
