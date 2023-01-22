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
    setApplyToDo(filteredList);
    dispatch(toDoActions.deleteToDo({ data: filteredList }));
  };

  return (
    <main className="relative flex flex-col justify-center items-center w-100% h-750px bg-gradient-to-r from-bg-light-gray to-main-blue">
      <main className="flex md:flex-row xs:flex-col-reverse 2xl:w-[50%] xl:w-[55%] lg:w-[60%] md:w-[65%] sm:w-[60%] xs:w-[60%] h-90% mt-30px">
        <section className="flex flex-col items-center w-100% h-100% py-30px bg-transparent rounded-[10px] border border-light-gray overflow-auto">
          {/* <BsCalendarPlus size="30" color="#fff" /> */}
          <p className="text-white 2xl:text-30px xl:text-25px lg:text-23px md:text-20px sm:text-18px xs:text-16px font-bold">
            CREATING TO-DO-LIST
          </p>
          <form className="border border-black flex items-end justify-between 2xl:w-350px 2xl:h-40px xl:w-300px xl:h-[35px] lg:w-250px lg:h-30px md:w-[220px] md:h-30px sm:w-200px sm:h-30px xs:w-180px xs:h-[25px] my-40px">
            <input
              type="text"
              placeholder="일정을 입력해주세요."
              value={toDo.userToDo}
              onChange={event => onToDo(event)}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              className={`${
                focus
                  ? 'w-[250px] h-40px pl-[15px] bg-transparent border-b-2 border-main-blue outline-none'
                  : '2xl:w-[270px] 2xl:text-16px xl:w-250px xl:text-14px lg:w-200px lg:h-40px lg:text-12px md:w-[170px] md:text-12px sm:w-150px sm:text-10px xs:w-130px xs:text-10px 2xl:pl-[15px] xl:pl-[15px] lg:pl-[15px] md:pl-[10px] sm:pl-[10px] xs:pl-[10px] bg-transparent border-b border-black outline-none'
              }`}
            />
            <button
              type="button"
              className="2xl:w-60px 2xl:h-40px 2xl:text-16px xl:w-40px xl:h-30px xl:text-14px lg:w-[35px] lg:h-[25px] lg:text-12px md:w-[32px] md:h-[22px] md:text-12px sm:w-[30px] sm:h-[20px] sm:text-10px xs:w-[30px] xs:h-[20px] xs:text-10px bg-white text-main-blue border border-middle-gray"
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
        <div className="flex flex-col justify-between h-100% border border-main-blue">
          <section className="sticky flex flex-col justify-start md:items-start xs:items-center text-antonio border border-white">
            <section
              className="2xl:w-300px 2xl:h-300px 2xl:ml-[30px] xl:w-250px xl:h-250px xl:ml-[30px] lg:w-200px lg:h-200px lg:ml-[25px] md:w-150px md:h-150px md:ml-[20px] sm:w-200px sm:h-200px xs:w-200px xs:h-200px
            sticky top-0 flex flex-col justify-between items-center mt-[30px] py-20px bg-light-box-black border border-middle-gray  text-deep-gray rounded-[20px] shadow-calendar-shadow
            "
            >
              <div className="flex items-center font-semi-bold">
                <FcCalendar size="20" />
                <p className="ml-10px 2xl:text-18px xl:text-16px">
                  일정을 선택해주세요.
                </p>
              </div>
              <section className="flex 2xl:w-200px border border-middle-gray rounded-[20px]">
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
              <div className="flex flex-col items-center">
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
          <section className="md:mt-25px md:mb-30px md:text-16px sm:mb-15px sm:text-12px xs:mb-15px xs:text-12px">
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
