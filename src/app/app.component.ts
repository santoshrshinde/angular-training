import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'THIS IS TITLE';
  isTitle: boolean = false;
  userResponse: string = '';
  users = [
    {
      name: 'test 1',
      id: 1
    },
    {
      name: 'test 2',
      id: 2
    },
    {
      name: 'test 4',
      id: 3
    },
    {
      name: 'test 4',
      id: 3
    }
  ];

  // from call
  getData() {
    /// http call
    this.title = 'Hello';
  }

  ngOnInit(): void {
  }

  toggle() {
    this.isTitle = !this.isTitle;
    this.userResponse = 'error';
  }

  getTitle() {
    this.title = "New Title";
    return this.title;
  }
  userId(index: number, user: any) {
    // console.log('index, user', index, user);
    return user.id;
  }
  delete(i: any) {
    console.log('index', i);
    this.userResponse = 'success';
  }
}
