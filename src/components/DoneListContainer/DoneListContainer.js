import React from 'react';
import { BsCalendarPlus } from 'react-icons/bs';
import { BsTrash } from 'react-icons/bs';

const DoneListContainer = ({
  key,
  id,
  userToDo,
  startDate,
  endDate,
  checked,
  onClick,
}) => {
  return (
    <div
      key={key}
      id={id}
      className="flex items-center justify-between w-[400px] h-[120px] mb-15px p-[10px] bg-light-box-black shadow-card-shadow text-middle-gray line-through rounded-[10px]"
    >
      <div className="flex text-14px text-deep-gray leading-5">
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
      <BsTrash className="cursor-pointer" onClick={onClick} />
    </div>
  );
};

export default DoneListContainer;
