import React, { useState, useEffect, useRef } from 'react';
import ToDoListContainer from '../../components/ToDoListContainer/ToDoListContainer';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { toDoActions } from '../../App/toDoListSlice';

const CheckingList = () => {
  const dispatch = useDispatch();
  const toDos = useSelector(state => state.toDo.toDoList);
  console.log(toDos);
  const count = useSelector(state => state.toDo.count);
  const [getList, setGetList] = useState();

  const counting = () => {
    dispatch(toDoActions.increment());
  };

  return (
    <main className="flex justify-center items-center max-w-100% h-750px my-40px">
      <section className="flex items-center w-50% h-90% py-30px border border-light-gray">
        {/* {toDos.map((list, index) => {
          return (
            <ToDoListContainer
              key={index}
              id={list.id}
              userToDo={list.userToDo}
              startDate={list.startDate}
              endDate={list.endDate}
            />
          );
        })} */}
        {count}
      </section>
      <button onClick={() => dispatch(toDoActions.increment())}>click</button>
    </main>
  );
};
export default CheckingList;
