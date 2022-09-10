import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firebaseAuth } from '../../shared/firebase';

const Nav = () => {
  const userToken = localStorage.getItem('token');
  console.log(userToken);
  const [date, setDate] = useState(new Date());
  const [isToken, setIsToken] = useState(false);

  // const test = () => {
  //   if (userToken) {
  //     setIsToken(true);
  //   } else if (!userToken) {
  //     setIsToken(false);
  //   }
  // };
  // test();
  // useEffect(() => {
  //   const time = setInterval(() => {
  //     setDate(new Date());
  //   }, 1000);
  //   return () => clearInterval(time);
  // }, []);
  const onLogout = () => {
    firebaseAuth
      .signOut()
      .then(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        alert('로그아웃 되었습니다.');
      })
      .catch(error => {
        alert('로그인 실패.');
      });
  };
  return (
    <nav className="flex justify-between max-w-100% h-80px px-70px bg-deep-gray">
      <div className="flex justify-center items-center w-20%">
        <img src="images/to-do-list-logo.png" alt="logo" />
      </div>
      <div className="flex justify-between items-center w-15% px-80px text-23px text-middle-gray font-bold font-antonio">
        {/* <span>{date.toLocaleDateString()}</span>
        <span>{date.toLocaleTimeString()}</span> */}
      </div>
      <div className="flex justify-between w-20% px-70px items-center font-antonio">
        {userToken ? (
          <button
            type="button"
            className="w-100px h-40px bg-main-blue text-light-gray font-semi-bold rounded-10px border border-light-gray"
            onClick={() => onLogout()}
          >
            Logout
          </button>
        ) : (
          <>
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
          </>
        )}
      </div>
    </nav>
  );
};
export default Nav;
