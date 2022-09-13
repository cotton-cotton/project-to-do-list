import React, { useState } from 'react';

const ToDoListContainer = ({
  key,
  id,
  userToDo,
  startDate,
  endDate,
  pushDate,
}) => {
  console.log(pushDate);
  return (
    <div key={key} className="flex flex-col items-center">
      <p>{pushDate}</p>
    </div>
  );
};

export default ToDoListContainer;
