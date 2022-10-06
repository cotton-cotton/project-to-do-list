import React, { useState } from 'react';
import { BsCalendarPlus } from 'react-icons/bs';
import { BsTrash } from 'react-icons/bs';

const ToDoListContainer = ({
  key,
  id,
  userToDo,
  startDate,
  endDate,
  pushDate,
  onClick,
}) => {
  return (
    <div
      key={key}
      className="flex items-center justify-between w-[400px] my-30px pb-20px border-b border-black"
    >
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
      <p className="w-[45%]">{userToDo}</p>
      <BsTrash className="cursor-pointer" onClick={onClick} />
    </div>
  );
};

export default ToDoListContainer;
