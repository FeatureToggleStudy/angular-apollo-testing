import { TestBed } from '@angular/core/testing';

import { GitHubProjectsService } from './githubprojects.service';
import { Apollo } from 'apollo-angular';

describe('GitHubProjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ Apollo ]
  }));

  it('should be created', () => {
    const service: GitHubProjectsService = TestBed.get(GitHubProjectsService);
    expect(service).toBeTruthy();
  });
});
