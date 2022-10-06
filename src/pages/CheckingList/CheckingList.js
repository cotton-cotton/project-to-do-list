import React, { useState, useEffect, useRef } from 'react';
import ToDoListContainer from '../../components/ToDoListContainer/ToDoListContainer';
import { Link } from 'react-router-dom';

const CheckingList = () => {
  const [getList, setGetList] = useState();
  const data = localStorage.getItem('todos');
  if (data) {
    const parsedData = JSON.parse(data);
    setGetList(parsedData);
  }
  console.log(getList);
  return (
    <main className="flex justify-center items-center max-w-100% h-750px my-40px">
      <section className="flex items-center w-50% h-90% py-30px border border-light-gray">
        <ToDoListContainer />
      </section>
    </main>
  );
};
export default CheckingList;
