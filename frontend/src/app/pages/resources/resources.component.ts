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

  ngOnInit() {
  }

}
