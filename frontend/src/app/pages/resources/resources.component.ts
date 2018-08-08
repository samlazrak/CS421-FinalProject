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
  newPanel(titleP: string, commentP: string, linkP: string) {

    var div = document.createElement('div');
    div.className = 'container';
    var divRow = document.createElement('div');
    divRow.className = 'row';
    divRow.style.margin = "20px";
    var divColImg = document.createElement('div');
    divColImg.className = 'col col-sm-2';
    var img = document.createElement('img');
    img.className = 'rounded';
    img.height = 100;
    img.width = 100;
    img.style.marginTop = '30px';
   
    // img.src = 'https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/GettyImages-968727464_u6ymkm/donald-trump-insults-lebron-james-twitter.jpg';
    img.src = 'https://png.pngtree.com/svg/20170602/person_1058425.png'
    var panel = document.createElement('div');
    panel.className = 'col col-lg-14';
    var card = document.createElement('div');
    card.className = 'card';
    var cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';
    cardHeader.innerHTML = titleP;
    var cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    var innerDiv = document.createElement('div');
    var comment = document.createElement('p');
    comment.className = 'card-text';
    comment.innerHTML = commentP;
    var link = document.createElement('a');
    link.className = 'btn btn-primary';
    link.href = linkP;
    console.log("This is the link" + this.link);
    link.innerHTML = "Go to source";

    div.appendChild(divRow);
    divColImg.appendChild(img);
    divRow.appendChild(divColImg);
    divRow.appendChild(panel);
    panel.appendChild(card);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    cardBody.appendChild(innerDiv);
    innerDiv.appendChild(comment);
    innerDiv.appendChild(link);

    document.body.appendChild(div);
    // console.log("This is the post: " + this.post);
    // console.log("This is the title of the post: " + this.titlePost);
  }

  shareButton() {
    if (this.post !== "" && this.titlePost !== "") {
      this.newPanel(this.titlePost, this.post, this.link);
    }
  }

  ngOnInit() {
    this.apollo
      .watchQuery<allResourcesResponse>({
        query: allResources
      })
      .valueChanges
      .subscribe((response) => {
        this.allResource = response.data.resources
        console.log(this.allResource)
        for (var i = 0; i < this.allResource.length; i++) {
          this.newPanel(this.allResource[i].title, this.allResource[i].id, this.allResource[i].comments);
          //console.log(i);
          //this.shareButton();
        }
      })


    //this.newPanel()
  }




}
