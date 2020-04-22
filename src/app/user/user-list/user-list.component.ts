import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectedUser } from '../../store/actions/selected-user.actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  @Input() users: any[];

  constructor(private store: Store<{ selectedUser: any }>) {
  }

  handleClickUser(user) {
    console.log('handleClickUser', user);
    this.store.dispatch(selectedUser({selectedUser: user}));
  }

}