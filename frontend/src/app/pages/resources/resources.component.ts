import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Resource } from '../../typeDefs/typedefs';
import { ResourceService } from '../../core/services/resource.service';

import { User,allResources, createPost, allResourcesResponse, createPostResponse } from '../../queries/queries'

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  // public post = "";
  // public titlePost = "";
  // public link = "";
  resources$: Observable<Resource[]>;
  allResource: Resource[] = []
  postAuthor: string = ''
  titlePost: string = ''
  post: string = ''
  link: string = ''

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
    divColImg.id = 'image';
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
    var linkFill: string = 'https://'
    if (this.post !== "" && this.titlePost !== "" && this.link !== "") {
      if(!this.link.includes("https://")){
        linkFill += this.link
        this.link = linkFill
      }
      this.findUser(this.postAuthor, this.link)
      // this.newPanel(this.titlePost, this.post, this.link);
    } else if(this.post == "" || this.titlePost == "" || this.link == ""){
      alert("Please fill in all blank fields.")
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
      // for(var i = 0; i < this.allResource.length; i++) {
      //   this.title = this.allResource[i].title
      // }
      let test = this.allResource[0]
      console.log('Le Test: ',test)
      // return this.allResource
      for (var i = 0; i < this.allResource.length; i++) {
        this.newPanel(this.allResource[i].title, this.allResource[i].content, this.allResource[i].link);
        //console.log(i);
        this.shareButton();
      }
    })
    // console.log()
      // this.newPanel()
      }


    //this.newPanel()
  // }

createPost(nameId, link) {
  this.apollo
    .mutate<createPostResponse> ({
      mutation: createPost,
      variables: {
        author: String(nameId),
        title: this.titlePost,
        content: this.post,
        link: link
      }
    }).subscribe(({data}) => {
      console.log(data)
      window.location.reload()
      // console.log(response.data)
      // return response
    })
}

findUser(nim, link) {
  this.apollo
    .watchQuery<any> ({
      query: User,
      variables: {
        userName: nim
      }
    })
    .valueChanges
    .subscribe((response) => {
      let name = response.data.userNim.id
      console.log(name)
      this.createPost(name, link)

      // return name
    })
}

}
