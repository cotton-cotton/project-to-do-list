import React, { useState } from 'react';

const InputContainer = ({ key, id, name, title, type, placeholder }) => {
  const [focus, setFocus] = useState();

  const isFocused = id => {
    setFocus(id);
  };

  return (
    <form className="flex flex-col items-start w-80%">
      <p className="flex justify-start my-15px">{title}</p>
      <input
        className={`${focus === id ? 'input-border-focused' : 'input-border'}`}
        key={key}
        id={id}
        type={type}
        onFocus={() => isFocused(id)}
        onBlur={() => setFocus('')}
        // placeholder={placeholder}
      />
    </form>
  );
};

export default InputContainer;
