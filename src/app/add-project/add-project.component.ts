import { Component } from '@angular/core';
import { GitHubProjectsService } from '../githubprojects.service';

interface GitHubResponse {
  data: any
};

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {

  constructor(private gitHubProjectsService: GitHubProjectsService) {}

  addProject() {
    this.gitHubProjectsService.addProject()
    .subscribe(({ data }: GitHubResponse) => {
      console.log('Id of the new project:', data.createProject.project.id)
    });
  }

}
