import React from "react";
export const Input = (props) => {
  const { onChange, value } = props;
  return <input onChange={onChange} value={value} {...props} />;
};
