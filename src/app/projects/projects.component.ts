import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import {
  map
} from 'rxjs/operators';
import { ApolloQueryResult } from 'apollo-client/core/types';

interface GithubData {
  projectsUrl: string;
  avatarUrl: string;
};
interface GithubResponse {
  viewer: GithubData
};

const UsersProjectsAndAvatar = gql`
  query UsersProjectsAndAvatar($avatarSize: Int!) {
    viewer { 
      projectsUrl
      avatarUrl(
        size: $avatarSize
      )
    }
  }
`;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  data: Observable<GithubData>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.data = this.apollo
      .watchQuery({
        query: UsersProjectsAndAvatar,
        variables: {
          avatarSize: 2,
        },
      })
      .valueChanges.pipe(map(({ data }: ApolloQueryResult<GithubResponse>) => {
        console.log('ProjectsComponent data', data)
        return data.viewer
      }));
  }

}
