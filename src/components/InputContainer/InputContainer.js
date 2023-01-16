import React, { useState } from 'react';

const InputContainer = ({ key, id, name, title, type, onChange }) => {
  const [focus, setFocus] = useState();
  const [valMessage, setValMessage] = useState(false);

  const isFocused = id => {
    setFocus(id);
  };

  return (
    <form className="flex flex-col items-start w-80%">
      <p className="flex justify-start 2xl:my-15px xl:my-15px lg:my-15px md:my-[12px] sm:my-[6px] xs:my-[2px] 2xl:text-15px xl:text-15px lg:text-15px md:text-12px sm:text-12px xs:text-12px">
        {title}
      </p>
      <input
        className={`${
          focus === id
            ? 'flex justify-center items-center w-100% 2xl:h-20px xl:h-20px lg:h-20px md:h-[15px] bg-black border-b-2 border-main-blue outline-0'
            : 'w-100% 2xl:h-20px xl:h-20px lg:h-20px md:h-[15px] bg-black border-b border-light-gray outline-0'
        }`}
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
      />
    </form>
  );
};

export default InputContainer;
