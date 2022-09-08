import React, { useState, useEffect } from 'react';
import logo from '../../';

const Nav = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const time = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(time);
  }, []);
  return (
    <nav className="flex justify-between w-100% h-80px px-70px bg-deep-gray">
      <div className="flex justify-center items-center w-20%">
        <img src="images/to-do-list-logo.png" alt="logo" />
      </div>
      <div className="flex justify-between items-center w-15% px-80px text-23px text-middle-gray font-bold font-antonio">
        <span>{date.toLocaleDateString()}</span>
        <span>{date.toLocaleTimeString()}</span>
      </div>
      <div className="flex justify-between w-20% px-70px items-center font-antonio">
        <button
          type="button"
          className="w-100px h-40px bg-main-blue text-light-gray font-semi-bold rounded-10px border border-light-gray"
        >
          Sign Up
        </button>
        <button
          type="button"
          className="w-100px h-40px bg-main-blue text-light-gray font-semi-bold rounded-10px border border-light-gray"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};
export default Nav;
