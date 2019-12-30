import axios from "axios";
import { TodoInterface } from "./interface.todo";

const url: string = "https://jsonplaceholder.typicode.com/todos/1";

const renderInfo = (userId: number, id: number, title: string, completed: boolean): void => {
  console.log(`
    The user id is ${userId}
    The id is ${id}
    The Title is ${title}
    The todo is completed ${completed}
    `);
};

axios.get(url).then(response => {
  const todo = response.data as TodoInterface;
  const { userId, id, title, completed } = todo;
  renderInfo(userId, id, title, completed);
});
