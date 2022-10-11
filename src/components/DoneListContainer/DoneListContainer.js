import { isRejected } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { BsCalendarPlus } from 'react-icons/bs';
import { BsTrash } from 'react-icons/bs';

const DoneListContainer = ({
  key,
  id,
  userToDo,
  startDate,
  endDate,
  onChange,
  checked,
  onClick,
}) => {
  console.log(checked);
  return (
    <div key={key} id={id} className={`${'checked-list'}`}>
      <div className="flex text-14px text-middle-gray leading-5">
        <div className="mr-20px">
          <BsCalendarPlus />
        </div>
        <div className="flex flex-col items-center">
          <p>{startDate}</p>
          <p>-</p>
          <p>{endDate}</p>
        </div>
      </div>
      <p className="w-[45%] ml-20px text-20px">{userToDo}</p>
      {/* <input
        type="checkbox"
        className="w-[15px] h-[15px] mr-[5px]"
        onChange={onChange}
        checked={checked}
      /> */}
      <BsTrash className="cursor-pointer" onClick={onClick} />
    </div>
  );
};

export default DoneListContainer;
