import React from 'react';
import { Link } from 'react-router-dom';
import { FcCalendar } from 'react-icons/fc';

const Main = () => {
  const userToken = localStorage.getItem('token');

  return (
    <main className="relative lg:w-100% lg:h-750px lg:bg-black md:w-md md:h-[500px] sm:w-sm sm:h-[250px] md:bg-main-blue sm:bg-white text-white text-antonio">
      <div className="absolute lg:w-[400px] lg:h-[400px] md:w-[250px] md:h-[250px] sm:w-[100px] sm:h-[100px] bg-gradient-to-r from-[#f5cae8] to-main-blue lg:translate-x-[450px] lg:translate-y-[10px] md:translate-x-[200px] md:translate-y-[20px] sm:translate-x-[120px] sm:translate-y-[10px] rounded-50%" />
      <div className="absolute lg:w-[350px] lg:h-[350px] md:w-[200px] md:h-[200px] sm:w-[100px] sm:h-[100px] bg-gradient-to-r from-main-blue to-[#c3dcf7] lg:translate-x-[950px] lg:translate-y-[450px] md:translate-x-[500px] md:translate-y-[360px] sm:translate-x-[280px] sm:translate-y-[160px] rounded-50%" />
      <div className="absolute lg:w-[170px] lg:h-[170px] md:w-[150px] md:h-[150px] sm:w-[50px] sm:h-[50px] bg-gradient-to-r from-main-blue to-[#c3dcf7] lg:translate-x-[950px] lg:translate-y-[10px] md:translate-x-[550px] md:translate-y-[20px] rounded-50%" />
      <section className="w-100% h-100% flex justify-center items-center">
        <div className="flex flex-col justify-center items-center lg:w-[450px] lg:h-[450px] md:w-[300px] md:h-[300px] sm:w-[150px] sm:h-[150px] bg-box-black border border-middle-gray backdrop-blur-md rounded-10px">
          <div className="flex flex-col justify-between items-center h-[150px]">
            {userToken ? (
              <p className="text-light-gray lg:text-20px md:text-18px font-semi-bold">
                Work's Space!
              </p>
            ) : (
              <p className="text-light-gray lg:text-20px md:text-18px font-semi-bold">
                로그인이 필요한 서비스 입니다.
              </p>
            )}
            <div className="flex flex-col justify-between h-80px">
              <Link to="/list/creating">
                <div type="button" className="flex items-center w-100%">
                  <div>
                    <FcCalendar size="30" />
                  </div>
                  <button
                    className="text-light-gray lg:text-20px md:text-18px font-semi-bold"
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
                    className="text-light-gray lg:text-20px md:text-18px font-semi-bold"
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
