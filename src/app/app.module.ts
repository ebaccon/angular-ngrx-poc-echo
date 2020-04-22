import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers/counter.reducer';
import { selectedUserReducer } from './store/reducers/selected-user.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    UserComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      { 
        count: counterReducer,
        selectedUser: selectedUserReducer
      },
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/