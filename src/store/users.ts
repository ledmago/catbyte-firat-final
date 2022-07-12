import { ADD_USER, SET_USER } from "./users.action";

const initial_state = {
  users: [],
};

const reducer = (
  state = initial_state,
  { type, payload }: { type: string; payload: User | User[] }
) => {
  switch (type) {
    case ADD_USER:
      return { ...state, users: [...state.users, payload] };
    case SET_USER:
      return { ...state, users: payload };
    default:
      break;
  }
  return state;
};

const actions = {};

export { reducer, actions };
