import React, { useState, useEffect, useRef } from 'react';
import CheckingListContainer from '../../components/CheckingListContainer/CheckingListContainer';
import DoneListContainer from '../../components/DoneListContainer/DoneListContainer';
import CheckingModal from '../../components/CheckingModal/CheckingModal';
import { Link } from 'react-router-dom';
import { BsCalendarPlus } from 'react-icons/bs';
import { MdAdd } from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux';
import { toDoActions } from '../../App/toDoListSlice';
import { connectAuthEmulator } from 'firebase/auth';
import { FcDoughnutChart } from 'react-icons/fc';

const TEST = [
  {
    id: 1,
    userToDo: 'test',
    startDate: '2022년 10월 08일(토)',
    endDate: '2022년 10월 08일(토)',
  },
  {
    id: 2,
    userToDo: 'test',
    startDate: '2022년 10월 08일(토)',
    endDate: '2022년 10월 08일(토)',
  },
  {
    id: 3,
    userToDo: 'test',
    startDate: '2022년 10월 08일(토)',
    endDate: '2022년 10월 08일(토)',
  },
  {
    id: 3,
    userToDo: 'test',
    startDate: '2022년 10월 08일(토)',
    endDate: '2022년 10월 08일(토)',
  },
  {
    id: 3,
    userToDo: 'test',
    startDate: '2022년 10월 08일(토)',
    endDate: '2022년 10월 08일(토)',
  },
  {
    id: 3,
    userToDo: 'test',
    startDate: '2022년 10월 08일(토)',
    endDate: '2022년 10월 08일(토)',
  },
];

const CheckingList = () => {
  const [checkedList, setCheckedList] = useState([]);
  const [removedList, setRemovedList] = useState([]);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const toDos = useSelector(state => state.toDo.toDoList);
  const doing = useSelector(state => state.toDo.doingList);

  const onCheckedList = (checked, list) => {
    if (checked) {
      // setCheckedList([...checkedList, list]);
      const filteredList = toDos.filter(el => el.id !== list.id);
      dispatch(toDoActions.addToDo({ data: filteredList }));
      dispatch(toDoActions.progressToDo({ data: [...doing, list] }));
    }
  };
  const onRemovedList = () => {
    const filteredList = doing.filter(list => list.id !== removedList);
    // setCheckedList(checkedList.filter(list => list.id !== removedList));
    dispatch(toDoActions.progressToDo({ data: filteredList }));
    setModal(!modal);
    // console.log(removedList);
  };
  const onRemove = id => {
    setRemovedList(id);
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  // console.log(checkedList);
  console.log('removed', removedList);
  //console.log('checked', checkedList);
  console.log('doing', doing);
  console.log('todos', toDos);
  return (
    <main className="flex flex-col justify-center items-center max-w-100% h-750px">
      {modal ? (
        <CheckingModal
          closeModal={() => closeModal()}
          onRemovedList={() => onRemovedList()}
          onClick={() => {
            closeModal();
            onRemovedList();
          }}
        />
      ) : null}
      <section
        className={`${modal ? 'modal-background' : 'noneModal-background'}`}
      >
        <div className="flex items-center">
          <BsCalendarPlus size="30" color="#fff" />
          <p className="ml-10px text-white text-30px font-bold">
            CHECKING TO-DO-LIST
          </p>
        </div>
        <div className="flex w-[60%] h-[100%] items-start justify-between mt-30px">
          <div className="flex flex-col items-start w-[45%] h-100% p-30px bg-light-gray rounded-[10px] overflow-auto">
            <p className="text-20px text-deep-gray font-semi-bold">
              In Progress
            </p>
            <div className="flex flex-col items-center w-100% my-10px">
              {toDos.map((list, index) => {
                return (
                  <CheckingListContainer
                    key={index}
                    id={list.id}
                    userToDo={list.userToDo}
                    startDate={list.startDate}
                    endDate={list.endDate}
                    onChange={event => {
                      onCheckedList(event.target.checked, list);
                    }}
                    checked={doing.includes(list.id) ? true : false}
                  />
                );
              })}
            </div>
            <Link to="/list/creating">
              <div className="flex items-center font-semi-bold">
                <MdAdd size="20" color="#494949" />
                <button className="ml-[5px] text-deep-gray">
                  일정 추가하기
                </button>
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-start w-[45%] h-100% p-30px bg-light-gray rounded-[10px] overflow-auto">
            <p className="text-20px text-deep-gray font-semi-bold">Done</p>
            <div className="flex flex-col items-center w-100% my-10px">
              {doing.map((list, index) => {
                return (
                  <DoneListContainer
                    key={index}
                    id={list.id}
                    userToDo={list.userToDo}
                    startDate={list.startDate}
                    endDate={list.endDate}
                    // onChange={event => {
                    //   onCheckedList(event.target.checked, list.id);
                    // }}
                    // checked={doing.includes(list.id) ? false : true}
                    onClick={event => onRemove(list.id)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default CheckingList;
