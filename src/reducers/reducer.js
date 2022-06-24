export default function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_TODO":
      return {
        ...state,
        todo: action.value,
      };
    case "ADD_TODO":
      return {
        ...state,
        todo: "",
        todos: [
          {
            title: action.todo,
            completed: false,
            userId: action.userId
          },
          ...state.todos,
        ],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: [...state.todos.filter((todo, index) => index !== action.index)],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: [
          ...state.todos.map((todo, index) => {
            if (action.index === index) {
              todo.completed = !todo.completed;
            }
            return todo;
          }),
        ],
      };
    case "UPDATE_SEARCH":
      return {
        ...state,
        search: action.value,
      };
    default:
      break;
  }
}
