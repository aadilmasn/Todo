export const loginFunc = () => ({
  type: "LOGIN",
});

export const logoutFunc = () => ({
  type: "LOGOUT",
});

export const registerFunc = (data) => ({
  type: "REGISTER",
  payload: data,
});

export const pastUserFunc = (data) => ({
  type: "PASTUSERS",
  payload: data,
});

export const currentFunc = (data) => ({
  type: "CURRENT",
  payload: data,
});

export const cartFunc = (data) => ({
  type: "CART",
  payload: data,
});

export const addProductFunc = (data) => ({
  type: "ADDPRODUCT",
  payload: data,
});

export const addPostFunc = (data) => ({
  type: "ADDPOST",
  payload: data,
});

export const addServiceFunc = (data) => ({
  type: "ADDSERVICE",
  payload: data,
});
export const addUserFunc = (data) => ({
  type: "ADDUSER",
  payload: data,
});

export const delProductFunc = (data) => ({
  type: "DELPRODUCT",
  payload: data,
});

export const delPostFunc = (data) => ({
  type: "DELPOST",
  payload: data,
});

export const delServiceFunc = (data) => ({
  type: "DELSERVICE",
  payload: data,
});

export const delUserFunc = (data) => ({
  type: "DELUSER",
  payload: data,
});

export const upProductFunc = (data) => ({
  type: "UPPRODUCT",
  payload: data,
});

export const upPostFunc = (data) => ({
  type: "UPPOST",
  payload: data,
});

export const upServiceFunc = (data) => ({
  type: "UPSERVICE",
  payload: data,
});
export const upUserFunc = (data) => ({
  type: "UPUSER",
  payload: data,
});

export const userProductFunc = (data) => ({
  type: "USERPRODUCT",
  payload: data,
});

export const userPostFunc = (data) => ({
  type: "USERPOST",
  payload: data,
});

export const userServiceFunc = (data) => ({
  type: "USERSERVICE",
  payload: data,
});
