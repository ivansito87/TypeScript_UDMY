import { Attributes } from "./attributes";
import { ApiSync } from "./apiSync";
import { UserEvents } from "./userEvents";
import { UserInterface } from "./user.interface";
import { Model } from "./model";

const rootUrl: string = "http://localhost:3000/users";
export class User extends Model<UserInterface> {
  static buildUser(attrs: UserInterface): User {
    return new User(
      new Attributes<UserInterface>(attrs),
      new UserEvents(),
      new ApiSync<UserInterface>(rootUrl)
    );
  }
}
