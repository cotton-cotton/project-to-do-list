import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import InputContainer from '../../components/InputContainer/InputContainer';
import { firebaseAuth } from '../../shared/firebase';
import { SignInData } from './SignInData';

const SignIn = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    userEmail: '',
    userPassword: '',
  });

  const { userEmail, userPassword } = inputValue;

  const onChangeValue = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const isActiveSubmit = userEmail.length >= 2 && userPassword.length >= 2;

  const onLogin = async () => {
    try {
      const userData = await signInWithEmailAndPassword(
        firebaseAuth,
        userEmail,
        userPassword
      );

      localStorage.setItem('token', JSON.stringify(userData.user.uid));

      alert(`환영합니다!`);
      navigate('/');
    } catch (error) {
      alert('잘못된 정보입니다.');
    }
  };
  return (
    <main className="flex justify-center items-center w-100% 2xl:h-750px xl:h-750px lg:h-750px md:h-700px sm:h-650px xs:h-650px bg-black">
      <main className="2xl:w-400px 2xl:h-[680px] xl:w-400px xl:h-[680px] lg:w-400px lg:h-[680px] md:w-300px md:h-550px sm:w-250px sm:h-[530px] xs:w-200px xs:h-500px py-30px text-light-gray font-antonio">
        <section className="flex flex-col items-center">
          <p className="flex items-start 2xl:w-[320px] xl:w-[320px] lg:w-[320px] md:w-250px sm:w-200px xs:w-160px 2xl:text-30px xl:text-30px lg:text-30px md:text-20px sm:text-16px xs:text-16px mb-20px text-main-blue font-bold">
            SIGN IN
          </p>
          <div className="flex flex-col items-center w-100%">
            {SignInData.map((list, index) => {
              return (
                <InputContainer
                  key={index}
                  id={list.id}
                  name={list.name}
                  title={list.title}
                  type={list.type}
                  placeholder={list.placeholder}
                  onChange={event => onChangeValue(event)}
                />
              );
            })}
          </div>
          <div className="flex items-center justify-center w-100% my-20px">
            <div className="flex justify-between 2xl:w-[220px] xl:w-[220px] lg:w-[220px] md:w-150px sm:w-140px xs:w-120px mt-20px">
              <button
                type="button"
                className={`${
                  isActiveSubmit
                    ? '2xl:w-100px 2xl:h-40px 2xl:text-18px xl:w-100px xl:h-40px xl:text-18px lg:w-100px lg:h-40px lg:text-18px md:w-70px md:h-30px md:text-14px sm:w-60px sm:h-30px sm:text-10px xs:w-50px xs:h-30px xs:text-10px mb-20px bg-main-blue text-white border border-light-gray;'
                    : '2xl:w-100px 2xl:h-40px 2xl:text-18px xl:w-100px xl:h-40px xl:text-18px lg:w-100px lg:h-40px lg:text-18px md:w-70px md:h-30px md:text-14px sm:w-60px sm:h-30px sm:text-10px xs:w-50px xs:h-30px xs:text-10px mb-20px bg-middle-gray text-white border border-light-gray'
                }`}
                disabled={isActiveSubmit ? false : true}
                onClick={() => onLogin()}
              >
                SIGN IN
              </button>
              <Link to="/">
                <button
                  type="button"
                  className="2xl:w-100px 2xl:h-40px 2xl:text-18px xl:w-100px xl:text-18px xl:h-40px lg:w-100px lg:h-40px lg:text-18px md:w-70px md:h-30px md:text-14px sm:w-60px sm:h-30px sm:text-10px xs:w-50px xs:h-30px xs:text-10px mb-20px bg-main-blue text-white border border-light-gray
              "
                >
                  CANCEL
                </button>
              </Link>
            </div>
          </div>
          <div className="flex mb-20px mr-30px 2xl:text-[16px] xl:text-15px lg:text-15px md:text-12px sm:text-10px xs:text-10px">
            <p>회원가입이 필요하신가요? |&nbsp;</p>
            <Link to="/signup">
              <p>SIGN UP</p>
            </Link>
          </div>
        </section>
      </main>
    </main>
  );
};
export default SignIn;
