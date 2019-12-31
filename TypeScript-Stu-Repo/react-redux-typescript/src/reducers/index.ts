import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { TodoInterface } from "../actions";

export interface StoreState {
  todos: TodoInterface[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer
});
