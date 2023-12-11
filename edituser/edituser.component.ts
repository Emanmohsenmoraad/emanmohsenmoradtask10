import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  newUser: any = {};
  constructor(private usersService: UsersService) { }
  saveEdit(user: any): void {
    this.usersService.editData(user.id, user.name,user.city);
    user.editing = false;
  }
}
