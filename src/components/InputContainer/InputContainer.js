import React, { useState } from 'react';

const InputContainer = ({ key, id, name, title, type, placeholder }) => {
  return (
    <form className="flex flex-col items-start w-80%">
      <p className="flex justify-start my-15px">{title}</p>
      <input
        className="w-90% h-20px bg-deep-gray border-b border-black outline-0"
        key={key}
        id={id}
        type={type}
        // placeholder={placeholder}
      />
    </form>
  );
};

export default InputContainer;
