import React, { useRef, forwardRef } from 'react';

const CustomInput = forwardRef(({ value, onClick, inputType }, ref) => {
  return (
    <div onClick={onClick} ref={ref}>
      <p className="text-12px">{inputType === 'start' ? '시작' : '끝'}</p>
      <div className="text-15px">{value}</div>
    </div>
  );
});

export default CustomInput;
