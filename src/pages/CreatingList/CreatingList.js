import React, { useState, useEffect, useRef } from 'react';
import ToDoListContainer from '../../components/ToDoListContainer/ToDoListContainer';
import DayPicker from '../../components/DayPicker/DayPicker';
import { FcCalendar } from 'react-icons/fc';
import { BsCalendarPlus } from 'react-icons/bs';

const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];
const TO_DO_LIST = [];

const CreatingList = () => {
  const [dateInput, setDateInput] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');

  const [focus, setFocus] = useState(false);

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

  const [toDo, setToDo] = useState({
    userToDo: '',
  });
  const [test, setTest] = useState([]);
  const [toDoList, setToDoList] = useState(TO_DO_LIST);
  const dateId = useRef(1);
  const nextId = useRef(1);

  const { userToDo } = toDo;
  console.log(toDo);

  const onToDo = event => {
    setToDo({
      ...toDo,
      userToDo: event.target.value,
    });
  };

  const [selectedDate, setSelectedDate] = useState({
    startDate: selectedStartDate,
    startDate: selectedEndDate,
  });
  const [pushDate, setPushDate] = useState();

  const onRegisterDate = () => {
    const toDoDate = {
      id: dateId.current,
      startDate: selectedStartDate,
      endDate: selectedEndDate,
    };

    setSelectedDate({
      startDate: '',
      endDate: '',
    });

    nextId.current += 1;

    localStorage.setItem('date', JSON.stringify(toDoDate));

    const getDateData = localStorage.getItem('date');

    if (getDateData) {
      const parsedData = JSON.parse(getDateData);
      setPushDate(parsedData);
    } else {
      setPushDate([]);
    }
  };

  // console.log(userToDo);
  const onCreate = event => {
    const toDos = {
      id: nextId.current,
      userToDo: userToDo,
      // startDate: selectedStartDate,
      // endDate: selectedEndDate,
    };

    setToDoList([...toDoList, toDos]);

    setToDo({
      userToDo: '',
      // startDate: '',
      // endDate: '',
    });

    nextId.current += 1;
    TO_DO_LIST.push(toDos);
    localStorage.setItem('toDo', JSON.stringify(TO_DO_LIST));
    const data = localStorage.getItem('toDo');

    if (data) {
      const parsedData = JSON.parse(data);
      setTest(parsedData);
    } else {
      setTest([]);
    }
  };

  // const data = localStorage.getItem(JSON.parse('toDo'));

  // if (data) {
  //   setTest(data);
  // } else {
  //   setTest('');
  // }

  return (
    <main className="relative flex justify-center items-center max-w-100% h-750px">
      <main className="flex flex-col items-center w-50% h-90% py-30px border border-light-gray">
        <div className="flex items-center">
          <BsCalendarPlus size="30" color="#5c7187" />
          <p className="ml-10px text-main-blue text-30px font-bold">
            CREATING TO-DO-LIST
          </p>
        </div>
        <form className="flex justify-between w-[400px] mt-40px">
          <input
            type="text"
            placeholder="일정을 입력해주세요."
            onChange={event => onToDo(event)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className={`${focus ? 'input-schedule-focused' : 'input-schedule'}`}
          />
          <button
            type="button"
            className="w-60px h-40px bg-main-blue text-white border border-middle-gray"
            onClick={() => onCreate()}
          >
            확인
          </button>
        </form>
        {pushDate ? (
          <div class="mt-30px text-18px text-deep-gray">
            <p>
              {pushDate.startDate} - {pushDate.endDate}
            </p>
          </div>
        ) : null}
        <section>
          {test.map((list, index) => {
            return (
              <ToDoListContainer
                key={index}
                id={list.id}
                userToDo={list.userToDo}
                startDate={list.startDate}
                endDate={list.endDate}
                pushDate={pushDate}
              />
            );
          })}
          {/* <button type="button">등록</button> */}
        </section>
      </main>
      <main className="sticky flex flex-col justify-start items-start h-90%">
        <section className="sticky top-0 flex flex-col justify-between items-center w-[350px] h-300px mt-[30px] ml-[30px] py-20px border border-middle-gray text-deep-gray rounded-[20px] shadow-calendar-shadow">
          <div className="flex items-center font-semi-bold">
            <FcCalendar size="20" />
            <p className="ml-10px text-18px">시작일을 선택해주세요</p>
          </div>
          <section className="flex w-[90%] border border-middle-gray rounded-[20px]">
            <div className="flex flex-col justify-center items-center w-[150px] h-70px px-[10px] border-r border-middle-gray">
              <DayPicker
                type="start"
                dateInput={dateInput}
                adjustDate={adjustDate}
              />
            </div>
            {/* <div className="flex flex-col justify-center items-center w-[150px] h-70px px-[10px]">
              <DayPicker
                type="end"
                dateInput={dateInput}
                adjustDate={adjustDate}
              />
            </div> */}
          </section>
          <div className="flex flex-col">
            <span>{selectedStartDate}</span>
          </div>
          <button
            onClick={() => onRegisterDate()}
            className="w-[150px] h-50px bg-main-blue text-white border border-light-gray"
          >
            완료
          </button>
        </section>
        <section className="sticky top-0 flex flex-col justify-between items-center w-[350px] h-300px mt-[30px] ml-[30px] py-20px border border-middle-gray text-deep-gray rounded-[20px] shadow-calendar-shadow">
          <div className="flex items-center font-semi-bold">
            <FcCalendar size="20" />
            <p className="ml-10px text-18px">마감일을 선택해주세요</p>
          </div>
          <section className="flex w-[90%] border border-middle-gray rounded-[20px]">
            <div className="flex flex-col justify-center items-center w-[150px] h-70px px-[10px] border-r border-middle-gray">
              <DayPicker
                type="end"
                dateInput={dateInput}
                adjustDate={adjustDate}
              />
            </div>
            {/* <div className="flex flex-col justify-center items-center w-[150px] h-70px px-[10px]">
              <DayPicker
                type="end"
                dateInput={dateInput}
                adjustDate={adjustDate}
              />
            </div> */}
          </section>
          <div className="flex flex-col">
            <span>{selectedStartDate}</span>
            <span className="text-center">-</span>
            <span>{selectedEndDate}</span>
          </div>
          <button
            onClick={() => onRegisterDate()}
            className="w-[150px] h-50px bg-main-blue text-white border border-light-gray"
          >
            완료
          </button>
        </section>
      </main>
    </main>
  );
};
export default CreatingList;
