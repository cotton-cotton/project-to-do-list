import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firebaseAuth } from '../../pages/shared/firebase';

import { MdOutlinePlaylistAdd } from 'react-icons/md';
import { MdOutlinePlaylistAddCheck } from 'react-icons/md';

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
    <nav className="relative flex justify-between w-100% px-70px bg-deep-gray items-center shadow-bar-shadow z-10">
      <div className="flex justify-center items-center xl:w-300px lg:w-250px md:w-250px sm:w-200px xs:w-150px">
        <Link to="/">
          <img src="/images/to-do-list-logo.png" alt="logo" />
        </Link>
      </div>
      <div className="hidden lg:flex justify-center lg:w-300px lg:text-18px md:flex md:w-250px md:text-10px md:mx-50px text-middle-gray font-bold font-antonio">
        <span className="mr-20px">{date.toLocaleDateString()}</span>
        <span className="mr-20px">{date.toLocaleTimeString()}</span>
      </div>
      <div className="flex justify-center items-center py-20px font-antonio lg:text-18px md:text-15px sm:text-15px xs:text-10px">
        {userToken ? (
          <>
            <button
              type="button"
              className="lg:w-100px lg:h-40px lg:text-18px md:w-70px md:h-30px md:text-12px sm:w-60px sm:h-[35px] sm:text-12px xs:w-[55px] xs:h-[25px] text-light-gray font-semi-bold border-r-2 border-main-blue"
              onClick={() => onLogout()}
            >
              Logout
            </button>
            <Link to="/list/checking">
              <button className="flex justify-center items-center lg:w-100px lg:h-40px lg:text-18px md:w-70px md:h-30px md:text-12px sm:w-60px sm:h-[35px] sm:text-12px xs:w-[55px] xs:h-[25px] text-light-gray font-semi-bold border-r-2 border-main-blue">
                <MdOutlinePlaylistAddCheck size="35" color="#babab8" />
              </button>
            </Link>
            <Link to="/list/creating">
              <button className="flex justify-center items-center lg:w-100px lg:h-40px lg:text-18px md:w-70px md:h-30px md:text-12px sm:w-60px sm:h-[35px] sm:text-12px xs:w-[55px] xs:h-[25px] text-light-gray font-semi-bold border-r-2 border-main-blue">
                <MdOutlinePlaylistAdd size="35" color="#babab8" />
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/signup">
              <button
                type="button"
                className="lg:w-100px lg:h-40px lg:text-1.125rem md:w-70px md:h-30px md:text-0.75rem sm:w-60px sm:h-[35px] sm:text-0.75rem xs:w-[55px] xs:h-[25px] text-light-gray font-semi-bold text-center border-r-2 border-main-blue"
              >
                Sign Up
              </button>
            </Link>
            <Link to="/signin">
              <button
                type="button"
                className="lg:w-100px lg:h-40px lg:text-1.125rem md:w-70px md:h-30px md:text-0.75rem sm:w-60px sm:h-[35px] sm:text-0.75rem xs:w-[55px] xs:h-[25px] text-light-gray font-semi-bold"
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
