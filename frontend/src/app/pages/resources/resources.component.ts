import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Resource } from '../../typeDefs/typedefs';
import { ResourceService } from '../../core/services/resource.service';

import { allResources, allResourcesResponse } from '../../queries/queries'

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  public post = "";
  public titlePost = "";
  public link = "";
  resources$: Observable<Resource[]>;
  loading: boolean
  resources: any
  allResource: Resource[] = []

  constructor(
    private apollo: Apollo,
    private resourceService: ResourceService
  ) {
    this.resources$ = this.resourceService.resources();
  }

  //This creates a new post for the user
  newPanel() {
    var div = document.createElement('div');
    div.className = 'container';
    var divRow = document.createElement('div');
    divRow.className = 'row';
    divRow.style.margin = "20px";
    var divColImg = document.createElement('div');
    divColImg.className = 'col col-sm-2';
    divColImg.id = 'image'; 
    var panel = document.createElement('div');
    panel.className = 'col col-lg-14';
    var card = document.createElement('div');
    card.className = 'card';
    var cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';
    cardHeader.innerHTML = this.titlePost;
    var cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    var innerDiv = document.createElement('div');
    var comment = document.createElement('p');
    comment.className = 'card-text';
    comment.innerHTML = this.post;
    var link = document.createElement('a');
    link.className = 'btn btn-primary';
    link.href = this.link;
    console.log("This is the link" + this.link);
    link.innerHTML = "Go to source";
    if (this.post !== "" && this.titlePost !== "") {

      div.appendChild(divRow);
      divRow.appendChild(divColImg);
      divRow.appendChild(panel);
      panel.appendChild(card);
      card.appendChild(cardHeader);
      card.appendChild(cardBody);
      cardBody.appendChild(innerDiv);
      innerDiv.appendChild(comment);
      innerDiv.appendChild(link);

      document.body.appendChild(div);
    }
    // console.log("This is the post: " + this.post);
    // console.log("This is the title of the post: " + this.titlePost);
  }

  ngOnInit() {
    this.apollo
      .watchQuery<allResourcesResponse>({
        query: allResources
      })
      .valueChanges
      .subscribe((response) => {
        this.allResource = response.data.resources
        console.log(this.allResource[0].title)
      })
      this.newPanel()
  }




}
