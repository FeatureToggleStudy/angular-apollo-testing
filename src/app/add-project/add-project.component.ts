import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { environment } from '../../environments/environment';
// import * as dotenv from 'dotenv'
// dotenv.config()

interface GitHubResponse {
  data: any
};

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  someId = () => Math.floor((Math.random() * 10000) + 1);
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

  constructor(private apollo: Apollo) {}

  addProject() {
    console.log('add project clicked')
    this.executeAddProject()
  }

  private executeAddProject(){
    this.apollo.mutate({
      mutation: this.addProjectMutation,
      variables: {
        ownerId: this.ownerId.toString(),
        name: `Some Project ${this.someId()}`
      }
    }).subscribe(({ data }: GitHubResponse) => {
      console.log('Id of the new project:', data.createProject.project.id)
    });
  }

}
