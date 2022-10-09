import React, { useState, useEffect, useRef } from 'react';
import CheckingListContainer from '../../components/CheckingListContainer/CheckingListContainer';
import { Link } from 'react-router-dom';
import { BsCalendarPlus } from 'react-icons/bs';

import { useDispatch, useSelector } from 'react-redux';
import { toDoActions } from '../../App/toDoListSlice';

const CheckingList = () => {
  const dispatch = useDispatch();
  const toDos = useSelector(state => state.toDo.toDoList);

  return (
    <main className="flex flex-col justify-center items-center max-w-100% h-750px my-40px">
      <section className="flex flex-col items-center w-25% h-90% py-30px border border-light-gray overflow-auto">
        <div className="flex items-center">
          <BsCalendarPlus size="30" color="#5c7187" />
          <p className="ml-10px text-main-blue text-30px font-bold">
            CHECKING TO-DO-LIST
          </p>
        </div>
        <div>
          {toDos.map((list, index) => {
            return (
              <CheckingListContainer
                key={index}
                id={list.id}
                userToDo={list.userToDo}
                startDate={list.startDate}
                endDate={list.endDate}
              />
            );
          })}
        </div>
      </section>
      <section className="flex items-center mt-25px">
        <p className="mr-20px">일정 추가하기</p>
        <Link to="/list/creating">
          <button
            type="button"
            className="w-100px h-40px bg-main-blue text-white border border-light-gray"
          >
            이동
          </button>
        </Link>
      </section>
    </main>
  );
};
export default CheckingList;
