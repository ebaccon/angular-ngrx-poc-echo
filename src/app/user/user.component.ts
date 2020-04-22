import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users = [
    {id: 1, firstName: 'Erwan', lastName: 'Baccon', age: 29},
    {id: 2, firstName: 'Toto', lastName: 'Tata', age: 15},
    {id: 3, firstName: 'Tutu', lastName: 'Titi', age: 18},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}