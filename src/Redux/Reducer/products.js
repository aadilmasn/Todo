import { initialState } from "../../Database/input";

export const productState = (state = initialState, action) => {
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
    case "CART":
      const carts = { ...state, cart: action.payload };
      return carts;
    case "ADDPT":
      const products = {
        ...state,
        products: [...state.products, action.payload],
      };
      return products;
    case "ADDPS":
      const addpost = { ...state, posts: [...state.posts, action.payload] };
      return addpost;
    case "ADDSR":
      const addser = {
        ...state,
        services: [...state.services, action.payload],
      };
      return addser;
    case "REGISTER":
      const adduser = {
        ...state,
        users: [...state.users, action.payload],
        status: true,
      };
      return adduser;
    case "DELPT":
      const datapt = state.products;
      const newpt = datapt.filter((items) => items.id !== action.payload);
      const delproduct = {
        ...state,
        products: [...newpt],
      };
      return delproduct;
    case "DELPS":
      const dataps = state.posts;
      const newps = dataps.filter((items) => items.id !== action.payload);
      const delposts = {
        ...state,
        posts: [...newps],
      };
      return delposts;
    case "DELSR":
      const dataser = state.services;
      const newser = dataser.filter((items) => items.id !== action.payload);
      const delser = {
        ...state,
        services: [...newser],
      };
      return delser;
    case "DELUSER":
      const datauser = state.users;
      const newuser = datauser.filter((items) => items.id !== action.payload);
      const deluser = {
        ...state,
        users: [...newuser],
      };
      return deluser;
    case "UPPT":
      const upproduct = {
        ...state,
        products: [...state.products, action.payload],
      };
      return upproduct;
    case "UPPS":
      const uppost = { ...state, posts: [...state.products, action.payload] };
      return uppost;
    case "UPSR":
      const upser = { ...state, products: [...state.products, action.payload] };
      return upser;
    default:
      return state;
  }
};
