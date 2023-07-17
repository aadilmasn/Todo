export const registerFunc = (data) => ({
  type: "REGISTER",
  payload: data,
});
export const loginFunc = () => ({
  type: "LOGIN",
});
export const logoutFunc = () => ({
  type: "LOGOUT",
});
export const currentFunc = (data) => ({
  type: "CURRENT",
  payload: data,
});
export const cartNumFunc = (data) => ({
  type: "CARTNUM",
  payload: data,
});

export const addProductFunc = (data) => ({
  type: "ADDPT",
  payload: data,
});
export const addPostFunc = (data) => ({
  type: "ADDPS",
  payload: data,
});
export const addServiceFunc = (data) => ({
  type: "ADDSR",
  payload: data,
});
export const delProductFunc = (data) => ({
  type: "DELPT",
  payload: data,
});
export const delPostFunc = (data) => ({
  type: "DELPS",
  payload: data,
});
export const delServiceFunc = (data) => ({
  type: "DELSR",
  payload: data,
});
export const upProductFunc = (data) => ({
  type: "UPPT",
  payload: data,
});
export const upPostFunc = (data) => ({
  type: "UPPS",
  payload: data,
});
export const upServiceFunc = (data) => ({
  type: "UPSR",
  payload: data,
});
