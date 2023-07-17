export const initialState = {
  config: {
    products: [],
    name: "",
    cart: 0,
    password: "",
    services: [],
    address: "",
    phone: 0,
    messages: [],
  },
};
export const userState = (state = initialState, action) => {
  switch (action.type) {
    case "USERDATA":
      const datas = { ...state, config: action.payload };
      return datas;
    default:
      return state;
  }
};
