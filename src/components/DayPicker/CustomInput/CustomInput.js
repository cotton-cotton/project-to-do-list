import React, { forwardRef } from 'react';

const CustomInput = forwardRef(({ value, onClick, inputType }, ref) => {
  return (
    <div onClick={onClick} ref={ref}>
      <p className="text-0.75rem">{inputType === 'start' ? '시작' : '끝'}</p>
      <div className="text-0.938rem">{value}</div>
    </div>
  );
});

export default CustomInput;
