import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ResourceComponent } from './core/components/resource/resource.component';
import {PagesModule} from './pages/pages.module';




@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    ResourceComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    private apollo: Apollo,
    private httpLink: HttpLink
  ) {
    this.apollo.create({
      link: this.httpLink.create({
        uri: 'http://localhost:3000/graphql'
      }),
      cache: new InMemoryCache()
    });
  }

}
