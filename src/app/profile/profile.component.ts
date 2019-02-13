import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';

const CurrentUserForProfile = gql`
  query UsersLogin {
    viewer { 
      login
    }
  }
`;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loading: boolean;
  currentUser: any;

  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: CurrentUserForProfile
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        console.log('ProfileComponent data', data)
        this.loading = loading;
        this.currentUser = data.viewer.login;
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

}
