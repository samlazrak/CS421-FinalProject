import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import graphql from 'graphql-tag';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

import { Query, Resource, Mutation} from '../../typeDefs/typedefs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(
    private apollo: Apollo
  ) { }

  resources(): Observable<Resource[]> {
    return this.apollo.query<Query>({
      query: graphql`
        query {
          resources {
            id,
            title,
            content,
            comments
          }
        }
      `
    }).pipe(
      map(({ data }) => data.resources)
    );
  }

  resource(id: String): Observable<Resource> {
    // @ts-ignore
    return this.apollo.query<Query>({
      query: graphql`
        query (id: String!) {
          resource (id: id) {
            id,
            title,
            content,
            comments
          }
        }
      `,
      variables: {
        id
      }
    }).pipe(
      map(({ data }) => {
        if (data.resource)
          return _.omit(data.resource, ['__typename']);
        else
          throw new Error(`Resource with ID: ${id} doesn't exist`);
      })
    );
  }

  update(resource: Resource): Observable<any> {
    return this.apollo.mutate<Mutation>({
      mutation: graphql`
        mutation ($id: String!, $title: String!, $content: String!, $comments: String) {
          update(id: $id, title: $title, content: $content, comments: $comments, isActive) {
            id,
            title,
            content,
            comments
          }
        }
      `,
      variables: {
        ...resource
      }
    });
  }

}
