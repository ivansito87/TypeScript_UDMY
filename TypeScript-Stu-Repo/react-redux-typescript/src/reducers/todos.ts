import { TodoInterface, ActionTypes, Action } from "../actions";

export const todosReducer = (state: TodoInterface[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: TodoInterface) => todo.id !== action.payload);
    default:
      return state;
  }
};
