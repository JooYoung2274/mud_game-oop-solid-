import { UserData } from '../data/userData';
import { Human } from './schema/human';

export class UserGenerator {
  constructor(private _user: UserData) {}

  userGenerator(h: number, v: number): UserData {
    const user = new Human({ type: 'init', lv: 0, hp: [0, 0], exp: 0, atk: 0, location: [Math.floor(h / 2), Math.floor(v / 2)] });
    this._user.data = user;
    return this._user;
  }
}
