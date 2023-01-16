import React from 'react';
import { Link } from 'react-router-dom';
import { FcCalendar } from 'react-icons/fc';

const Main = () => {
  const userToken = localStorage.getItem('token');

  return (
    <main className="relative w-100% 2xl:h-750px xl:h-700px lg:h-650px md:h-550px sm:h-500px xs:h-500px bg-black text-white text-antonio">
      <div
        className="absolute 2xl:w-400px 2xl:h-400px xl:w-350px xl:h-350px lg:w-300px lg:h-300px md:w-[230px] md:h-[230px] sm:w-200px sm:h-200px xs:w-150px xs:h-150px bg-gradient-to-r from-[#f5cae8] to-main-blue 
      2xl:translate-x-[450px] 2xl:translate-y-[10px] xl:translate-x-[250px] xl:translate-y-[10px] lg:translate-x-[180px] lg:translate-y-[10px] md:translate-x-[100px] md:translate-y-[10px] sm:translate-x-[100px] sm:translate-y-[30px] xs:translate-x-[70px] xs:translate-y-[50px] rounded-50%"
      />
      <div
        className="absolute 2xl:w-350px 2xl:h-350px xl:w-300px xl:h-300px lg:w-250px lg:h-250px md:w-200px md:h-200px sm:w-180px sm:h-180px xs:w-130px xs:h-130px bg-gradient-to-r from-main-blue to-[#c3dcf7] 
      2xl:translate-x-[950px] 2xl:translate-y-[450px] xl:translate-x-[700px] xl:translate-y-[480px] lg:translate-x-[600px] lg:translate-y-[450px] md:translate-x-[450px] md:translate-y-[400px] sm:translate-x-[400px] sm:translate-y-[300px] xs:translate-x-[300px] xs:translate-y-[300px] rounded-50%"
      />
      <div
        className="absolute 2xl:w-170px 2xl:h-170px xl:w-170px xl:h-170px lg:w-130px lg:h-130px md:w-100px md:h-100px sm:w-80px sm:h-80px xs:w-60px xs:h-60px bg-gradient-to-r from-main-blue to-[#c3dcf7] 
      2xl:translate-x-[950px] 2xl:translate-y-[10px] xl:translate-x-[700px] xl:translate-y-[10px] lg:translate-x-[580px] lg:translate-y-[20px] md:translate-x-[480px] md:translate-y-[40px] sm:translate-x-[380px] sm:translate-y-[40px] xs:translate-x-[300px] xs:translate-y-[90px] rounded-50%"
      />
      <section className="w-100% h-100% flex justify-center items-center">
        <div className="flex flex-col justify-center items-center 2xl:w-450px 2xl:h-450px xl:w-[430px] xl:h-[430px] lg:w-400px lg:h-400px md:w-[370px] md:h-[370px] sm:w-[270px] sm:h-[270px] xs:w-250px h-250px bg-box-black border border-middle-gray backdrop-blur-md rounded-10px">
          <div className="flex flex-col justify-between items-center 2xl:h-150px xl:h-150px lg:h-150px md:h-150px sm:h-100px xs:h-100px">
            {userToken ? (
              <p className="text-light-gray 2xl:text-20px xl:text-20px lg:text-18px md:text-[16px] sm:text-14px xs:text-12px font-semi-bold">
                Work's Space!
              </p>
            ) : (
              <p className="text-light-gray 2xl:text-20px xl:text-20px lg:text-18px md:text-[16px] sm:text-14px xs:text-12px font-semi-bold">
                로그인이 필요한 서비스 입니다.
              </p>
            )}
            <div className="flex flex-col justify-between 2xl:h-80px xl:h-80px lg:h-70px md:h-70px sm:h-50px xs:h-50px">
              <Link to="/list/creating">
                <div type="button" className="flex items-center w-100%">
                  {/* <div>
                    <FcCalendar size="25" />
                  </div> */}
                  <button
                    className="text-light-gray 2xl:text-20px xl:text-20px lg:text-18px md:text-[16px] sm:text-14px xs:text-12px font-semi-bold"
                    disabled={userToken ? false : true}
                  >
                    &nbsp;Creating Schedule List
                  </button>
                </div>
              </Link>
              <Link to="/list/checking">
                <div type="button" className="flex items-center w-100%">
                  {/* <FcCalendar size="25" /> */}
                  <button
                    className="text-light-gray 2xl:text-20px xl:text-20px lg:text-18px md:text-[16px] sm:text-14px xs:text-12px font-semi-bold"
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
