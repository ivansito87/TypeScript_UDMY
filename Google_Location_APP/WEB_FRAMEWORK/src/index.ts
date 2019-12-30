import axios from "axios";
import { User } from "../models/user";

const user = new User({ id: 1, name: "Newer Name", age: 2020 });
user.on("save", () => {
  console.log(user);
});
user.save();
