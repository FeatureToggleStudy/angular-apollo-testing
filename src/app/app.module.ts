import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule
} from '@angular/material';

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

import { GitHubProjectsService } from './githubprojects.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ExchangeRatesComponent,
    ProfileComponent,
    ProjectsComponent,
    AddProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory(httpLink: HttpLink) {
      const authLink = setContext((_, { headers }) => {
        const token = environment.GRAPHQL_CLI_TOKEN || '';
        // return the headers to the context so httpLink can read them
        return {
          headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
          }
        }
      });
      
      const getHttpLink = (httpLink) => httpLink.create({
        uri: 'https://api.github.com/graphql'
      })
      return {
        cache: new InMemoryCache(),
        link: authLink.concat(getHttpLink(httpLink)),
        // link: httpLink.create({
        //   uri: 'https://o5x5jzoo7z.sse.codesandbox.io/graphql'
        // })
      };
    },
    deps: [HttpLink]
  },
    GitHubProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
