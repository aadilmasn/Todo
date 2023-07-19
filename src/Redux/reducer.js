import { initialState } from "../Database/input";

export const totalState = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "LOGIN":
      const logins = { ...state, status: true };
      return logins;
    case "LOGOUT":
      const logouts = { ...state, status: false, current: "" };
      return logouts;
    case "REGISTER":
      const registers = {
        ...state,
        users: [...state.users, action.payload],
        status: true,
      };
      return registers;
    case "PASTUSERS":
      const pastUser = { ...state, past: { ...state.past, ...action.payload } };
      return pastUser;
    case "CURRENT":
      const currents = { ...state, current: action.payload };
      return currents;
    case "CART":
      const carts = { ...state, cart: action.payload };
      return carts;
    case "ADDPRODUCT":
      const addProducts = {
        ...state,
        products: [...state.products, action.payload],
      };
      return addProducts;
    case "ADDPOST":
      const addPost = { ...state, posts: [...state.posts, action.payload] };
      return addPost;
    case "ADDSERVICE":
      const addService = {
        ...state,
        services: [...state.services, action.payload],
      };
      return addService;
    case "DELPRODUCT":
      const productData = state.products;
      const brandProduct = productData.filter(
        (items) => items.id !== action.payload
      );
      const deletedProduct = {
        ...state,
        products: [...brandProduct],
      };
      return deletedProduct;
    case "DELPOST":
      const postData = state.posts;
      const brandPost = postData.filter((items) => items.id !== action.payload);
      const deletedPost = {
        ...state,
        posts: [...brandPost],
      };
      return deletedPost;
    case "DELSERVICE":
      const serviceData = state.services;
      const brandService = serviceData.filter(
        (items) => items.id !== action.payload
      );
      const deletedService = {
        ...state,
        services: [...brandService],
      };
      return deletedService;
    case "DELUSER":
      const userData = state.users;
      const brandUser = userData.filter((items) => items.id !== action.payload);
      const deletedUser = {
        ...state,
        users: [...brandUser],
      };
      return deletedUser;
    case "UPPRODUCT":
      const upproduct = {
        ...state,
        products: [...state.products, action.payload],
      };
      return upproduct;
    case "UPPOST":
      const uppost = { ...state, posts: [...state.products, action.payload] };
      return uppost;
    case "UPSERVICE":
      const upser = { ...state, products: [...state.products, action.payload] };
      return upser;
    case "UPUSER":
      const updateUser = {
        ...state,
        products: [...state.products, action.payload],
      };
      return updateUser;
    case "USERPRODUCT":
      const currentId = state.current;
      const currentProductData = action.payload;
      const userProduct = {
        ...state,
        past: { ...state.past, [currentId]: currentProductData },
      };
      return userProduct;
    case "USERPOST":
      const userPost = {
        ...state,
        config: { ...state.config, ...action.payload },
      };
      return state;
    case "USERSERVICE":
      const currentServiceId = state.current;
      const currentServiceData = action.payload;
      const userService = {
        ...state,
        past: { ...state.past, [currentServiceId]: currentServiceData },
      };
      return userService;
    default:
      return state;
  }
};
