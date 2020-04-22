import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  seletedUser$: Observable<any>;

  constructor(private store: Store<{ selectedUser: any }>) {
    this.seletedUser$ = store.pipe(select('selectedUser'));
  }
  ngOnInit() {
  }

}