import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { Users } from '../users';
import { inject } from '@angular/core';
@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  // for getting datat from servcie
userserve = inject(UsersService )

users :Users |undefined;

constructor() {
  const userid = Number(this.route.snapshot.params['id']);
  this.users = this.userserve.getuserbyid(userid);
}

}


