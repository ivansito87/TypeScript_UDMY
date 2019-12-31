import React from "react";
import { connect } from "react-redux";
import { TodoInterface, fetchTodos, deleteTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppInterface {
  todos: TodoInterface[];
  fetchTodos: Function;
  deleteTodos: typeof deleteTodos;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppInterface, AppState> {
  constructor(props: AppInterface) {
    super(props);
    this.state = { fetching: false };
  }

  handleButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({
      fetching: true
    });
  };

  componentDidUpdate(prevProps: AppInterface): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  handleTodoClick = (id: number): void => {
    this.props.deleteTodos(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((each: TodoInterface) => {
      return (
        <div onClick={() => this.handleTodoClick(each.id)} key={each.id}>
          {each.title}
        </div>
      );
    });
  }

  render() {
    console.log(this.props.todos);
    return [
      <div>
        <button onClick={this.handleButtonClick}>Click Me</button>
      </div>,
      <div>
        <div>{this.state.fetching ? "Loading" : this.renderList()}</div>
      </div>
    ];
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: TodoInterface[] } => {
  return { todos };
};

export const App = connect(
  mapStateToProps,
  { fetchTodos, deleteTodos }
)(_App);
