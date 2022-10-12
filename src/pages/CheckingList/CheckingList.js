import React, { useState } from 'react';
import CheckingListContainer from '../../components/CheckingListContainer/CheckingListContainer';
import DoneListContainer from '../../components/DoneListContainer/DoneListContainer';
import CheckingModal from '../../components/CheckingModal/CheckingModal';
import { Link } from 'react-router-dom';
import { BsCalendarPlus } from 'react-icons/bs';
import { BiMessageSquareAdd } from 'react-icons/bi';

import { useDispatch, useSelector } from 'react-redux';
import { toDoActions } from '../../App/toDoListSlice';

const CheckingList = () => {
  const dispatch = useDispatch();
  const toDos = useSelector(state => state.toDo.toDoList);
  const doing = useSelector(state => state.toDo.doingList);

  const [removedList, setRemovedList] = useState([]);
  const [modal, setModal] = useState(false);

  const onCheckedList = (checked, list) => {
    if (checked) {
      const filteredList = toDos.filter(el => el.id !== list.id);
      dispatch(toDoActions.addToDo({ data: filteredList }));
      dispatch(toDoActions.progressToDo({ data: [...doing, list] }));
    }
  };
  const onRemovedList = () => {
    const filteredList = doing.filter(list => list.id !== removedList);
    dispatch(toDoActions.progressToDo({ data: filteredList }));
    setModal(!modal);
  };
  const onRemove = id => {
    setRemovedList(id);
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

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
        <div className="flex w-[60%] h-[100%] items-start justify-between mt-50px">
          <div className="flex flex-col items-start w-[45%] h-100% p-30px bg-transparent rounded-[10px] overflow-auto">
            <p className="text-20px text-deep-gray font-semi-bold">
              In Progress
            </p>
            <div className="flex flex-col items-center w-100% my-30px">
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
                <BiMessageSquareAdd size="20" color="#494949" />
                <button className="ml-[5px] text-deep-gray">
                  일정 추가하기
                </button>
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-start w-[45%] h-100% p-30px bg-transparent rounded-[10px] overflow-auto">
            <p className="text-20px text-deep-gray font-semi-bold">Done</p>
            <div className="flex flex-col items-center w-100% my-30px">
              {doing.map((list, index) => {
                return (
                  <DoneListContainer
                    key={index}
                    id={list.id}
                    userToDo={list.userToDo}
                    startDate={list.startDate}
                    endDate={list.endDate}
                    onClick={() => onRemove(list.id)}
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
