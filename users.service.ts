import { Injectable } from '@angular/core';
import { Users } from './users';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  users:Users[] = [{ id: 1, name: 'Eman', password:'359891'},
  { id: 2, name: 'Eman', password:'359891'},
  { id: 3, name: 'Eman', password:'359891'}
];
getalldata():Users[]{
   return this.users;
}
delete(id:number){
  const index = this.users.findIndex((user => user.id === id));
  this.users.splice(index,1);
 
}
getuserbyid(id:number):Users |undefined{

  return this.users.find( users => users.id === id );
}
newItem: any = {};
adduser(par:Users){ this.newItem.id=this.users.length + 1;

  this.users.push(this.newItem);
  this.newItem = {};
console.log(par);
}selectedItem: any | null = null;
editData(id: number, newName: string, newCity:string): void {
  if (this.selectedItem) {
    const index = this.users.findIndex(par => par.id === this.selectedItem.id);
    if (index > -1) {
      this.users[index] = { ...this.selectedItem }; 
      this.selectedItem = null; 
    }
  }

}

}
