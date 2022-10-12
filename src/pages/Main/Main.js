import React from 'react';
import { Link } from 'react-router-dom';
import { FcCalendar } from 'react-icons/fc';

const Main = () => {
  const userToken = localStorage.getItem('token');

  return (
    <main className="relative max-w-100% h-750px bg-black text-white text-antonio">
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-[#f5cae8] to-main-blue translate-x-[450px] translate-y-[10px] rounded-50%" />
      <div className="absolute w-[350px] h-[350px] bg-gradient-to-r from-main-blue to-[#c3dcf7] translate-x-[950px] translate-y-[450px] rounded-50%" />
      <div className="absolute w-[170px] h-[170px] bg-gradient-to-r from-main-blue to-[#c3dcf7] translate-x-[950px] translate-y-[10px] rounded-50%" />
      <section className="w-100% h-100% flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[450px] h-[450px] bg-box-black border border-middle-gray backdrop-blur-md rounded-10px">
          <div className="flex flex-col justify-between items-center h-[150px]">
            {userToken ? (
              <p className="text-light-gray text-20px font-semi-bold">
                Work's Space!
              </p>
            ) : (
              <p className="text-light-gray text-20px font-semi-bold">
                로그인이 필요한 서비스 입니다.
              </p>
            )}
            <div className="flex flex-col justify-between h-80px">
              <Link to="/list/creating">
                <div type="button" className="flex items-center w-100%">
                  <FcCalendar size="30" />
                  <button
                    className="text-light-gray text-20px font-semi-bold"
                    disabled={userToken ? false : true}
                  >
                    &nbsp;Creating Schedule List
                  </button>
                </div>
              </Link>
              <Link to="/list/checking">
                <div type="button" className="flex items-center w-100%">
                  <FcCalendar size="30" />
                  <button
                    className="text-light-gray text-20px font-semi-bold"
                    disabled={userToken ? false : true}
                  >
                    &nbsp;Checking Schedule List
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Main;
