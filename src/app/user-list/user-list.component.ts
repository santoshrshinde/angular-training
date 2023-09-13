import { Component, OnInit } from '@angular/core';
import { user } from '../data/users';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users: Array<any> = user;

  constructor(private router: Router) {

  }
  ngOnInit(): void {
      console.log('users', this.users);
      if(localStorage.getItem('selectedUser')) {
        const data: any = localStorage.getItem('selectedUser');
        const selectedUser = JSON.parse(data);
        console.log(selectedUser);
        const filteredUser = user.filter((u)=> u.id === selectedUser.id )[0];
        const indexOfSelectedUserInList = user.indexOf(filteredUser);
        this.users[indexOfSelectedUserInList] = selectedUser;
      }
      if(localStorage.getItem('selectedUserToAdd')) {
        const data: any = localStorage.getItem('selectedUserToAdd');
        const selectedUser = JSON.parse(data);
        this.users.push(selectedUser);
      }
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

  edit(user: any): void {
    console.log(user);
    this.router.navigate(['/user-details/' + user.id]); // user-details/2
  }
}
