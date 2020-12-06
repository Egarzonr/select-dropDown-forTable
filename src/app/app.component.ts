import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public users: any[];
  public cacheUsers: any[];
  public persons: any[];
  title = 'dropDown';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.persons = [
      {
        name: 'Ernesto',
      },
      {
        name: 'Fernanda',
      },
      {
        name: 'Diana',
      },
      {
        name: 'Paula',
      },
    ];

    const data = [
      {
        id: 1,
        name: 'Ernesto',
        email: '1@gmail.com',
      },
      {
        id: 2,
        name: 'Fernanda',
        email: '2@gmail.com',
      },
      {
        id: 3,
        name: 'Diana',
        email: '3@gmail.com',
      },
      {
        id: 4,
        name: 'Paula',
        email: '4@gmail.com',
      },
      {
        id: 5,
        name: 'Ernesto',
        email: '5@gmail.com',
      },
    ];

    this.cacheUsers = data;
    this.users = data;
  }

  filterUsers(filterVal: any) {
    console.log(filterVal);

    if (filterVal === '0') {
      this.users = this.cacheUsers;
    } else {
      this.users = this.cacheUsers.filter((item) => item.name === filterVal);
    }
  }
}
