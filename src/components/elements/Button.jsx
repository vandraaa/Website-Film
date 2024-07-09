import { children } from "react";

const Button = (props) => {
  const { 
    children = "Button", 
    type,
    id,
    onclick,
    customStyle = "w-full"
    } = props;
  return (
    <button
      className={`bg-blue-600 ${customStyle} hover:bg-blue-700 font-medium text-white px-4 py-2 rounded-lg duration-300 ease-in-out`}
      type={type}
      id={id}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;
