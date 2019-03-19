import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { environment } from '../environments/environment';
// import * as dotenv from 'dotenv';
// dotenv.config();

@Injectable({
  providedIn: 'root'
})
export class GitHubProjectsService {

  constructor(private apollo: Apollo) {}

  ownerId = environment.OWNER_ID || '';
  addProjectMutation = gql`
    mutation createProject($ownerId: ID!, $name: String!){
      createProject(input: {
        ownerId: $ownerId
        name: $name
        body: "this is a graphql-created project for learning purpose"
      }){
        project {
          bodyHTML
          id
        }
      }
    }
  `;

  someId = () => Math.floor((Math.random() * 10000) + 1);

  addProject(){
    return this.apollo.mutate({
      mutation: this.addProjectMutation,
      variables: {
        ownerId: this.ownerId.toString(),
        name: `Some Project ${this.someId()}`
      }
    })
  }
}
