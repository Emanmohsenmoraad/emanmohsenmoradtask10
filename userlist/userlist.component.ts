import { Component ,inject} from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

  users: Users[] = [];

  userservce :UsersService = inject(UsersService);
  constructor(){

   
      this.users  = this.userservce.getalldata();
  
      
  }
deletedata(id:number){
this.userservce.delete(id);
}
}
