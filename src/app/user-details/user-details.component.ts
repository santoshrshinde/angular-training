import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../data/users';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  title = "DEMO";
  userid: any;
  selectedUser : {title: string, body: string} = {title: '', body: ''};

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe((params: any)=> {
      if(params.id) {
        this.userid =  parseInt(params.id);
        this.selectedUser = user.filter((u)=> u.id === this.userid )[0];
      }
    });
  }

  display() {
    console.log(this.title);
  }

  saveData() {
    if(this.userid){
      localStorage.setItem('selectedUser', JSON.stringify(this.selectedUser));
    } else {
      localStorage.setItem('selectedUserToAdd', JSON.stringify(this.selectedUser));
    }
    this.router.navigateByUrl('/user-list');
  }
}
