import { Component, OnInit } from '@angular/core';
import { user } from '../data/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users: Array<any> = user;

  ngOnInit(): void {
      console.log('users', this.users);
  }
  delete(index: number) {
    /* const filteredUser = this.users.filter((d)=> d.id === user.id); 2
    console.log('filteredUser', filteredUser);
    const indexOfSelectedUser =  this.users.findIndex(filteredUser[0]);
    console.log('indexOfSelectedUser', indexOfSelectedUser); */
    /* const index = this.users.indexOf(user);
    console.log('index', index);
    this.users.splice(index, 1) */
    this.users.splice(index, 1);
  }
}
