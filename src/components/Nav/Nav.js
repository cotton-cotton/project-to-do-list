import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { firebaseAuth } from '../../shared/firebase';

const Nav = () => {
  const navigate = useNavigate();

  const userToken = localStorage.getItem('token');
  //console.log(userToken);
  const [date, setDate] = useState(new Date());
  const [isToken, setIsToken] = useState(false);

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
        localStorage.removeItem('user');
        alert('로그아웃 되었습니다.');
        navigate('/');
      })
      .catch(error => {
        alert('로그인 실패.');
      });
  };

  return (
    <nav className="relative flex justify-between max-w-100% h-80px px-70px bg-deep-gray shadow-bar-shadow z-10">
      <div className="flex justify-center items-center w-20%">
        <img src="/images/to-do-list-logo.png" alt="logo" />
      </div>
      <div className="flex justify-between items-center w-15% px-80px text-20px text-middle-gray font-bold font-antonio">
        <span>{date.toLocaleDateString()}</span>
        <span>{date.toLocaleTimeString()}</span>
      </div>
      <div className="flex justify-between w-[21.5%] px-70px items-center font-antonio">
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
            <Link to="/signup">
              <button
                type="button"
                className="w-100px h-40px bg-main-blue text-light-gray font-semi-bold rounded-10px border border-light-gray"
              >
                Sign Up
              </button>
            </Link>
            <Link to="/signin">
              <button
                type="button"
                className="w-100px h-40px bg-main-blue text-light-gray font-semi-bold rounded-10px border border-light-gray"
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
