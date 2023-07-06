import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    {email: 'test1@test.com', name: 'User 1'},
    {email: 'test2@test.com', name: 'User 2'},
    {email: 'test3@test.com', name: 'User 3'},
    {email: 'test4@test.com', name: 'User 4'},
  ];
}
