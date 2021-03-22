import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static key = 'users';
  subject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(UserService.deserialize());
  user: BehaviorSubject<User> = new BehaviorSubject<User>(null)

  constructor() { }

  private static deserialize(): User[] {
    return JSON
      .parse(localStorage.getItem(UserService.key) || '[]')
      .map((user: SerializableUser) => ({ ...user }));
  }

  private static serialize(users: User[]) {
    localStorage.setItem(UserService.key, JSON.stringify(users));
  }

  private static id(users: User[]) {
    const ids = users.map(user => user.id);
    return ids.length === 0 ? 1 : Math.max(...ids) + 1;
  }

  findAll(): Observable<User[]> {
    return this.subject;
  }
  
  save(user: User): void {
    const users: User[] = UserService.deserialize();
    if (user.id == null) {
      users.push({ ...user, id: UserService.id(users) });
    } else {
      const index = users.findIndex(obj => obj.id === user.id);
      users[index] = user;
    }
    UserService.serialize(users);
    this.subject.next(users);
  }

  getUser(id: number) {
    const users: User[] = UserService.deserialize();
    const index = users.findIndex(user => user.id === id);
    this.user.next(users[index])
    return this.user.asObservable()
  }
}

export interface SerializableUser {
  id?: number;
  firstName: string;
  lastName: string
  email: string
}


export interface User {
  id?: number
  firstName: string;
  lastName: string;
  email: string;
}
