import React from 'react';
import { BsCalendarPlus } from 'react-icons/bs';
import { BsTrash } from 'react-icons/bs';

const ToDoListContainer = ({
  key,
  id,
  userToDo,
  startDate,
  endDate,
  onClick,
}) => {
  return (
    <div
      key={key}
      id={id}
      className="flex items-center justify-between overflow-y 2xl:w-350px 2xl:h-120px xl:w-300px xl:h-90px lg:w-250px lg:h-80px md:w-[220px] md:h-70px mb-15px sm:w-200px sm:h-70px xs:w-180px xs:h-60px p-10px bg-transparent shadow-card-shadow text-deep-gray rounded-10px"
    >
      <div className="flex 2xl:text-0.875rem xl:text-0.75rem lg:text-0.625rem md:text-0.625rem sm:text-0.625rem xs:text-0.625rem text-deep-gray lg:leading-5 md:leading-4 sm:leading-4 xs:leading-3">
        <div className="mr-5px">
          <BsCalendarPlus />
        </div>
        <div className="flex flex-col items-center">
          <p>{startDate}</p>
          <p>-</p>
          <p>{endDate}</p>
        </div>
      </div>
      <p className="overflow-y-scroll 2xl:w-100px 2xl:h-50px 2xl:text-1rem xl:w-100px xl:h-50px xl:text-0.875rem lg:w-70px lg:h-50px lg:text-0.75rem md:w-40px md:h-50px md:text-0.75rem sm:w-40px sm:h-50px sm:text-0.75rem xs:w-30px xs:h-40px xs:text-0.625rem">
        {userToDo}
      </p>
      <BsTrash className="cursor-pointer" size="15" onClick={onClick} />
    </div>
  );
};

export default ToDoListContainer;
