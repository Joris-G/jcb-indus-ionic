import { UserService } from '../_services/user.service';

export class User implements Crud {
  firstname: string | undefined;
  lastname: string | undefined;
  roles: string[] | undefined;
  email: string | undefined;
  add(): void {
    this.userService.addUser(this.firstname!!, this.lastname!!);
  }
  delete(): void {
    throw new Error('Method not implemented.');
  }
  update(): void {
    throw new Error('Method not implemented.');
  }
  constructor(private userService: UserService) {}
}

export interface Crud {
  add(): void;
  delete(): void;
  update(): void;
}

export class Gest extends User {}
export class Admin extends User {}

export interface Team {
  users: [{ role: string; user: User }];
}
