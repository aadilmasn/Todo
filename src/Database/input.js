export const loginFormValues = { logmail: "", logpass: "" };

export const loginInputValues = [
  {
    name: "logmail",
    type: "email",
    placeholder: "Email or Phone",
    required: true,
    autoComplete: "off",
    className: "form-control w-100 mb-3 mx-auto",
  },
  {
    name: "logpass",
    type: "password",
    placeholder: "Enter Password",
    required: true,
    autoComplete: "off",
    className: "form-control w-100 mb-3 mx-auto",
  },
];
export const registerFormValues = {
  id:"",
  regmail: "",
  regpass: "",
  regconfirm: "",
};

export const registerInputValues = [
  {
    name: "regmail",
    type: "email",
    placeholder: "Email or Phone",
    required: true,
    autoComplete: "off",
    className: "form-control w-100 mb-3 mx-auto",
  },
  {
    name: "regpass",
    type: "password",
    placeholder: "Enter Password",
    required: true,
    autoComplete: "off",
    className: "form-control w-100 mb-3 mx-auto",
  },
  {
    name: "regconfirm",
    type: "password",
    placeholder: "Confirm Password",
    required: true,
    autoComplete: "off",
    className: "form-control w-100 mb-3 mx-auto",
  },
];

export const productInputValues = [
  {
    name: "productName",
    type: "text",
    placeholder: "Enter Product Name",
    required: true,
    className: "form-control w-100 mb-3 mx-auto",
  },
  {
    name: "productPrice",
    type: "number",
    placeholder: "Enter Price",
    required: true,
    className: "form-control w-100 mb-3 mx-auto",
  },
  {
    name: "productDesc",
    type: "text",
    placeholder: "Describe Product",
    required: true,
    className: "form-control w-100 mb-3 mx-auto",
  },
  {
    name: "productImg",
    type: "text",
    placeholder: "Paste URL",
    required: true,
    className: "form-control w-100 mb-3 mx-auto",
  },
];

export const productFormValues = {
  id:"",
  productName: "",
  productPrice: 0,
  productDesc: "",
  productImg: "",
};
export const serviceInputValues = [
  {
    name: "serviceName",
    type: "text",
    placeholder: "Enter Service Name",
    required: true,
    className: "form-control w-100 mb-3 mx-auto",
  },
  {
    name: "servicePrice",
    type: "number",
    placeholder: "Enter Price",
    required: true,
    className: "form-control w-100 mb-3 mx-auto",
  },
  {
    name: "serviceDesc",
    type: "text",
    placeholder: "Describe Service",
    required: true,
    className: "form-control w-100 mb-3 mx-auto",
  },
  {
    name: "serviceImg",
    type: "text",
    placeholder: "Paste URL",
    required: true,
    className: "form-control w-100 mb-3 mx-auto",
  },
];

export const serviceFormValues = {
  id:"",
  serviceName: "",
  servicePrice: 0,
  serviceDesc: "",
  serviceImg: "",
};
export const postInputValues = [
  {
    name: "postName",
    type: "text",
    placeholder: "Enter post Name",
    required: true,
    className: "form-control w-100 mb-3 mx-auto",
  },
  {
    name: "postDesc",
    type: "text",
    placeholder: "Describe Post",
    required: true,
    className: "form-control w-100 mb-3 mx-auto",
  },
  {
    name: "postImg",
    type: "text",
    placeholder: "Paste URL",
    required: true,
    className: "form-control w-100 mb-3 mx-auto",
  },
];

export const postFormValues = {
  id:"",
  postName: "",
  postDesc: "",
  postImg: "",
};
