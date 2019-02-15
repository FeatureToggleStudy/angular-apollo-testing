import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import {
  map
} from 'rxjs/operators';
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
export class AddProjectComponent implements OnInit {
  someId = Math.floor((Math.random() * 10000) + 1);
  ownerId = environment.OWNER_ID || '';
  addProjectMutation = gql`
    mutation createProject{ 
      createProject(input: {
        ownerId: "${this.ownerId}"
        name: "some Project ${this.someId}"
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

  ngOnInit() {
    // console.log('process.env.OWNER_ID', process.env.OWNER_ID)
    console.log('environment', environment)
  }
  addProject() {
    console.log('add project clicked')
    this.executeAddProject()
  }

  private executeAddProject(){
    this.apollo.mutate({
      mutation: this.addProjectMutation
    }).subscribe(({ data }: GitHubResponse) => {
      console.log('project id', data.createProject.project.id)
    });
  }

}
