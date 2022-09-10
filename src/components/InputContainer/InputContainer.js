import React, { useState } from 'react';

const InputContainer = ({
  key,
  id,
  name,
  title,
  type,
  placeholder,
  message,
  onChange,
  nameVal,
  nickNameVal,
  passwordVal,
}) => {
  const [focus, setFocus] = useState();
  const [valMessage, setValMessage] = useState(false);

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
        name={name}
        type={type}
        onFocus={() => {
          isFocused(id);
          setValMessage(true);
        }}
        onBlur={() => {
          setFocus('');
          setValMessage(false);
        }}
        onChange={onChange}
        // placeholder={placeholder}
      />
      {!nameVal && valMessage ? (
        <p className="pt-5px text-13px text-middle-gray">{message.name}</p>
      ) : null}
      {!nickNameVal && valMessage ? (
        <p className="pt-10px text-13px text-middle-gray">{message.nickName}</p>
      ) : null}
      {!passwordVal && valMessage ? (
        <p className="pt-10px text-13px text-middle-gray">{message.password}</p>
      ) : null}
    </form>
  );
};

export default InputContainer;
