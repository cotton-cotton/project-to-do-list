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
  const done = useSelector(state => state.toDo.doneList);
  const [removedList, setRemovedList] = useState([]);
  const [modal, setModal] = useState(false);

  const onCheckedList = (checked, list) => {
    if (checked) {
      const filteredList = toDos.filter(el => el.id !== list.id);
      dispatch(toDoActions.addToDo({ data: filteredList }));
      dispatch(toDoActions.progressToDo({ data: [...done, list] }));
    }
  };
  const onRemovedList = () => {
    const filteredList = done.filter(list => list.id !== removedList);
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
          <p className="ml-10px text-white 2xl:text-30px xl:text-30px lg:text-30px md:text-25px sm:text-20px font-bold">
            CHECKING TO-DO-LIST
          </p>
        </div>

        <div className="flex md:flex-row xs:flex-col 2xl:w-[60%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[60%] xs:w-[60%] h-[100%] items-start justify-between mt-50px">
          <div className="flex flex-col items-start 2xl:w-500px xl:w-400px lg:w-300px md:w-[230px] sm:w-100% xs:w-100% xs:mb-20px h-100% p-30px bg-transparent rounded-[10px] overflow-auto">
            <p className="xl:text-20px lg:text-18px md:text-16px sm:text-14px xs:text-14px text-deep-gray font-semi-bold">
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
                    checked={done.includes(list.id) ? true : false}
                  />
                );
              })}
            </div>
            <Link to="/list/creating">
              <div className="flex items-center font-semi-bold">
                <BiMessageSquareAdd size="15" color="#494949" />
                <button className="2xl:text-16px xl:text-15px lg:text-14px md:text-13px xs:text-12px ml-[5px] text-deep-gray">
                  일정 추가하기
                </button>
              </div>
            </Link>
          </div>

          <div className="flex flex-col items-start 2xl:w-500px xl:w-400px lg:w-300px md:w-[230px] sm:w-100% xs:w-100% h-100% p-30px bg-transparent rounded-[10px] overflow-auto">
            <p className="xl:text-20px lg:text-18px md:text-16px sm:text-14px xs:text-14px text-deep-gray font-semi-bold">
              Done
            </p>
            <div className="flex flex-col items-center w-100% my-30px">
              {done.map((list, index) => {
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
