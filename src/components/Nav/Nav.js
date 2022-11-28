import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firebaseAuth } from '../../shared/firebase';

const Nav = () => {
  const userToken = localStorage.getItem('token');

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const time = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(time);
  }, []);

  const onLogout = () => {
    firebaseAuth
      .signOut()
      .then(() => {
        localStorage.removeItem('token');
        alert('로그아웃 되었습니다.');
        window.location.replace('/');
      })
      .catch(error => {
        alert('로그인 실패.');
      });
  };

  return (
    <nav className="relative flex justify-between lg:w-100% lg:h-80px md:w-md sm:w-sm px-70px bg-deep-gray items-center shadow-bar-shadow z-10">
      <div className="flex justify-center items-center lg:w-20% md:w-[250px] sm:w-200px">
        <Link to="/">
          <img src="/images/to-do-list-logo.png" alt="logo" />
        </Link>
      </div>
      <div className="hidden lg:flex items-center px-80px text-18px md:flex px-80px text-middle-gray font-bold font-antonio">
        <span className="mr-20px">{date.toLocaleDateString()}</span>
        <span className="mr-20px">{date.toLocaleTimeString()}</span>
      </div>
      <div className="flex justify-center items-center py-20px font-antonio lg:text-18px md:text-15px sm:text-15px">
        {userToken ? (
          <button
            type="button"
            className="lg:w-100px h-40px md:w-[80px] h-30px sm:w-60px h-30px bg-main-blue text-light-gray font-semi-bold rounded-10px border border-light-gray"
            onClick={() => onLogout()}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/signup">
              <button
                type="button"
                className="lg:w-100px h-40px md:w-[80px] h-30px sm:w-[70px] mr-20px bg-main-blue text-light-gray font-semi-bold text-center rounded-10px border border-light-gray"
              >
                Sign Up
              </button>
            </Link>
            <Link to="/signin">
              <button
                type="button"
                className="lg:w-100px h-40px md:w-[80px] h-30px sm:w-[70px]  bg-main-blue text-light-gray font-semi-bold rounded-10px border border-light-gray"
              >
                Sign In
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};
export default Nav;
