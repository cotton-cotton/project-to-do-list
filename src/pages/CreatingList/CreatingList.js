import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ToDoListContainer from '../../components/ToDoListContainer/ToDoListContainer';
import DayPicker from '../../components/DayPicker/DayPicker';
import { FcCalendar } from 'react-icons/fc';
import { BsCalendarPlus } from 'react-icons/bs';
import { BsArrowRightSquare } from 'react-icons/bs';

import { useDispatch, useSelector } from 'react-redux';
import { toDoActions } from '../../App/toDoListSlice';

const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

const CreatingList = () => {
  const dispatch = useDispatch();
  const toDos = useSelector(state => state.toDo.toDoList);

  const [dateInput, setDateInput] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [focus, setFocus] = useState(false);
  const [toDo, setToDo] = useState({
    userToDo: '',
  });

  useEffect(() => {
    const startYear = dateInput.startDate.getFullYear();
    const startMonth = 1 + dateInput.startDate.getMonth();
    const startDate = dateInput.startDate.getDate();
    const startDay = DAY_LIST[dateInput.startDate.getDay()];
    setSelectedStartDate(
      `${startYear}년 ${startMonth}월 ${startDate}일(${startDay})`
    );

    const endYear = dateInput.endDate.getFullYear();
    const endMonth = 1 + dateInput.endDate.getMonth();
    const endDate = dateInput.endDate.getDate();
    const endDay = DAY_LIST[dateInput.endDate.getDay()];
    setSelectedEndDate(`${endYear}년 ${endMonth}월 ${endDate}일(${endDay})`);
  }, [dateInput]);

  const adjustDate = (type, date) => {
    if (type === 'startDate' && date > dateInput.endDate) {
      setDateInput({
        startDate: date,
        endDate: date,
      });
    } else {
      setDateInput(prevDate => ({ ...prevDate, [type]: date }));
    }
  };

  const nextId = useRef(1);

  const { userToDo } = toDo;

  const onToDo = event => {
    setToDo({
      ...toDo,
      userToDo: event.target.value,
    });
  };

  const [applyStart, setApplyStart] = useState();
  const [applyEnd, setApplyEnd] = useState();
  const [applyToDo, setApplyToDo] = useState([]);

  const onApplyDate = () => {
    setApplyStart(selectedStartDate);
    setApplyEnd(selectedEndDate);
    alert('일정이 정상적으로 선택되었습니다.');
  };

  const onCreate = () => {
    if (!applyStart && !applyEnd) {
      alert('일정을 먼저 선택해주세요!');
    } else {
      const toDoListContainer = {
        id: nextId.current,
        userToDo: userToDo,
        startDate: applyStart,
        endDate: applyEnd,
      };

      setToDo({
        userToDo: '',
      });
      setDateInput({
        startDate: new Date(),
        endDate: new Date(),
      });
      nextId.current += 1;
      setApplyToDo([...applyToDo, toDoListContainer]);
      dispatch(
        toDoActions.addToDo({ data: [...applyToDo, toDoListContainer] })
      );
    }
  };

  const onRemove = id => {
    const filteredList = toDos.filter(list => list.id !== id);
    dispatch(toDoActions.deleteToDo({ data: filteredList }));
  };

  return (
    <main className="relative flex flex-col justify-center items-center max-w-100% h-750px bg-gradient-to-r from-bg-light-gray to-main-blue">
      <main className="flex w-50% h-90% mt-30px">
        <section className="flex flex-col items-center w-100% h-100% py-30px bg-transparent rounded-[10px] border border-light-gray overflow-auto">
          <div className="flex items-center">
            <BsCalendarPlus size="30" color="#fff" />
            <p className="ml-10px text-white text-30px font-bold">
              CREATING TO-DO-LIST
            </p>
          </div>
          <form className="flex justify-between w-[400px] my-40px">
            <input
              type="text"
              placeholder="일정을 입력해주세요."
              value={toDo.userToDo}
              onChange={event => onToDo(event)}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              className={`${
                focus ? 'input-schedule-focused' : 'input-schedule'
              }`}
            />
            <button
              type="button"
              className="w-60px h-40px bg-white text-main-blue border border-middle-gray"
              onClick={() => {
                onCreate();
              }}
            >
              확인
            </button>
          </form>
          {toDos.map((list, index) => {
            return (
              <ToDoListContainer
                key={index}
                id={list.id}
                userToDo={list.userToDo}
                startDate={list.startDate}
                endDate={list.endDate}
                onClick={() => onRemove(list.id)}
              />
            );
          })}
        </section>
        <div className="flex flex-col justify-between h-100%">
          <section className="sticky flex flex-col justify-start items-start text-antonio">
            <section className="bg-light-box-black border border-middle-gray sticky top-0 flex flex-col justify-between items-center w-[350px] h-[300px] mt-[30px] ml-[30px] py-20px text-deep-gray rounded-[20px] shadow-calendar-shadow">
              <div className="flex items-center font-semi-bold">
                <FcCalendar size="20" />
                <p className="ml-10px text-18px">일정을 선택해주세요.</p>
              </div>
              <section className="flex w-[80%] border border-middle-gray rounded-[20px]">
                <div className="flex flex-col justify-center items-center w-[150px] h-70px px-[10px] border-r border-middle-gray">
                  <DayPicker
                    type="start"
                    dateInput={dateInput}
                    adjustDate={adjustDate}
                  />
                </div>
                <div className="flex flex-col justify-center items-center w-[150px] h-70px px-[10px]">
                  <DayPicker
                    type="end"
                    dateInput={dateInput}
                    adjustDate={adjustDate}
                  />
                </div>
              </section>
              <div className="flex flex-col items-center text-15px">
                <span>{selectedStartDate}</span>
                <span>-</span>
                <span>{selectedEndDate}</span>
              </div>
              <button
                onClick={() => onApplyDate()}
                className="w-100px h-40px bg-main-blue text-white border border-light-gray"
              >
                완료
              </button>
            </section>
          </section>
          <section className="mt-25px mb-30px">
            <Link to="/list/checking">
              <button type="button" className="flex items-center ml-[40px]">
                <BsArrowRightSquare size="20" />
                <p className="ml-10px">일정 확인하러 가기</p>
              </button>
            </Link>
          </section>
        </div>
      </main>
    </main>
  );
};
export default CreatingList;
