import axios from "axios";
import { User } from "../models/user";

const user = User.buildUser({ id: 1 });

user.on("save", () => {
  console.log(user);
});

user.fetch();
