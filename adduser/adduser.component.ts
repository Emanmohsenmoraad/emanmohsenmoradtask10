import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../users';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  // for getting datat from servcie

  userservce :UsersService = inject(UsersService);



 x: Users = {
    id: 0,
    name: '',
    password: ''
  };

  constructor(private usersService: UsersService) { }

  addUser() {
    this.usersService.adduser(this.x)
    if(this.x){
      console.log('User added successfully!')
    }
     
      ;
  }}

