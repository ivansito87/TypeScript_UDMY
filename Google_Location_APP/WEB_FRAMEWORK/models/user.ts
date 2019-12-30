import { Sync } from "./sync";
import { UserEvents } from "./userEvents";
import { UserInterface } from "./user.interface";
import { Attributes } from "./attributes";
import { AxiosResponse } from "axios";

const rootUrl: string = "http://localhost:3000/users";
export class User {
  public events: UserEvents = new UserEvents();
  public sync: Sync<UserInterface> = new Sync<UserInterface>(rootUrl);
  public attributes: Attributes<UserInterface>;

  constructor(attrs: UserInterface) {
    this.attributes = new Attributes<UserInterface>(attrs);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: UserInterface): void {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  public fetch(): void {
    const id = this.attributes.get("id");
    if (typeof id !== "number") {
      throw new Error("Cannot fetch without an id");
    }
    this.sync
      .fetch(id)
      .then((r: AxiosResponse): void => {
        this.set(r.data);
      })
      .catch(e => console.log(e));
  }

  public save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((r: AxiosResponse): void => {
        this.trigger("save");
      })
      .catch(e => this.trigger(e));
  }
}
