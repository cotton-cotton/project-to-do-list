import React from 'react';
import { BsCalendarPlus } from 'react-icons/bs';
const CheckingListContainer = ({
  key,
  id,
  userToDo,
  startDate,
  endDate,
  onChange,
  checked,
}) => {
  return (
    <div
      key={key}
      id={id}
      className="
      flex items-center justify-between w-[400px] h-[120px] mb-15px p-[10px] bg-light-box-black shadow-card-shadow rounded-[10px]"
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
      <p className="w-[45%] ml-20px text-18px">{userToDo}</p>
      <input
        type="checkbox"
        className="w-[15px] h-[15px] mr-[5px] rounded-[20px] accent-black"
        onChange={onChange}
        checked={checked}
      />
    </div>
  );
};

export default CheckingListContainer;
