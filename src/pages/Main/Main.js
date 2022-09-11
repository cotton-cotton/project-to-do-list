import React from 'react';
import { FcCalendar } from 'react-icons/fc';

const Main = () => {
  const userName = localStorage.getItem('user');

  return (
    <main className="relative max-w-100% h-750px bg-black text-white text-antonio">
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-[#f5cae8] to-main-blue translate-x-[450px] translate-y-[10px] rounded-50%" />
      <div className="absolute w-[350px] h-[350px] bg-gradient-to-r from-main-blue to-[#c3dcf7] translate-x-[950px] translate-y-[450px] rounded-50%" />
      <div className="absolute w-[170px] h-[170px] bg-gradient-to-r from-main-blue to-[#c3dcf7] translate-x-[950px] translate-y-[10px] rounded-50%" />
      <section className="w-100% h-100% flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[450px] h-[450px] bg-box-black border border-middle-gray backdrop-blur-md rounded-10px">
          <div className="flex flex-col justify-between items-center h-[150px]">
            {userName ? (
              <p className="text-light-gray text-20px font-semi-bold">
                니부's Work Space
              </p>
            ) : (
              <p className="text-light-gray text-20px font-semi-bold">
                로그인이 필요한 서비스 입니다.
              </p>
            )}
            <div className="flex flex-col justify-between h-80px">
              <button type="button" className="flex items-center w-100%">
                <FcCalendar size="30" />
                <p className="text-light-gray text-20px font-semi-bold">
                  &nbsp;Creating Schedule List
                </p>
              </button>
              <button type="button" className="flex items-center w-100%">
                <FcCalendar size="30" />
                <p className="text-light-gray text-20px font-semi-bold">
                  &nbsp;Checking Schedule List
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Main;
