export const initialState = {
  users: [],
  current: "",
  status: false,
  cart: 0,
};

export const loginState = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "LOGIN":
      const logins = { ...state, status: true };
      return logins;
    case "LOGOUT":
      const logouts = { ...state, status: false };
      return logouts;
    case "CURRENT":
      const currents = { ...state, current: action.payload };
      return currents;
    case "REGISTER":
      const register = {
        ...state,
        users: [...state.users, action.payload],
        status: true,
      };
      return register;
    case "CARTNUM":
      const carts = { ...state, cart: action.payload };
      return carts;
    default:
      return state;
  }
};
