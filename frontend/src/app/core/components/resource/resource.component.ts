import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Resource } from '../../../typeDefs/typedefs';
import { ResourceService } from '../../services/resource.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private resourceService: ResourceService
  ) {
    this.route.params.pipe(
      switchMap(params => {
        return this.resourceService.resource(String(+params['id']));
      })
    )
    .subscribe(
      resource => this.editForm.setValue(resource),
      error => this.router.navigate(['../'])
    );

    this.editForm = this.formBuilder.group({
      id: new FormControl(''),
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      comments: new FormControl('')
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.resourceService
      .update(this.editForm.value)
      .subscribe(() => this.router.navigate(['../']));
  }

}
