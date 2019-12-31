import { FetchTodosActionInterface, DeleteTodosInterface } from "./todos";

export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

export type Action = FetchTodosActionInterface | DeleteTodosInterface;
