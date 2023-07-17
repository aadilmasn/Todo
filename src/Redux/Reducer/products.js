export const initialState = {
  products: [],
  services: [],
  posts: [],
};

export const productState = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
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
    case "DELPT":
      const newproducts = action.payload;
      const delproduct = {
        ...state,
        products: [...newproducts],
      };
      return delproduct;
    case "DELPS":
      const newposts = action.payload;
      const delposts = {
        ...state,
        posts: [...newposts],
      };
      return delposts;
    case "DELSR":
      const newservices = action.payload;
      const delser = {
        ...state,
        services: [...newservices],
      };
      return delser;
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
