import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

const rootUrl: string = "https://jsonplaceholder.typicode.com/todos";

export interface TodoInterface {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosActionInterface {
  type: ActionTypes.fetchTodos;
  payload: TodoInterface[];
}

export interface DeleteTodosInterface {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<TodoInterface[]>(rootUrl);
    dispatch<FetchTodosActionInterface>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    });
  };
};

export const deleteTodos = (id: number): DeleteTodosInterface => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  };
};
