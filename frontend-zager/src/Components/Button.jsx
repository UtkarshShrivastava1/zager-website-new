import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
