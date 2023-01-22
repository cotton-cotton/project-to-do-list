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
      className="flex items-center justify-between 2xl:w-[400px] 2xl:h-[120px] xl:w-300px xl:h-100px lg:w-250px lg:h-80px md:w-200px md:h-70px sm:w-200px sm:h-70px xs:w-200px xs:h-60px mb-15px p-[10px] bg-light-box-black shadow-card-shadow text-middle-gray line-through rounded-[10px]"
    >
      <div className="flex 2xl:text-14px xl:text-12px xs:text-10px lg:leading-5 xs:leading-3 text-deep-gray">
        <div className="mr-[5px]">
          <BsCalendarPlus />
        </div>
        <div className="flex flex-col items-center">
          <p>{startDate}</p>
          <p>-</p>
          <p>{endDate}</p>
        </div>
      </div>
      <p className="overflow-y-scroll 2xl:w-150px 2xl:h-50px 2xl:text-16px xl:w-100px xl:h-50px xl:text-14px lg:w-70px lg:h-50px lg:text-12px md:w-40px md:h-50px md:text-12px sm:w-40px sm:h-50px sm:text-12px xs:w-30px xs:h-40px xs:text-10px ml-20px">
        {userToDo}
      </p>
      <BsTrash className="cursor-pointer" onClick={onClick} />
    </div>
  );
};

export default DoneListContainer;
