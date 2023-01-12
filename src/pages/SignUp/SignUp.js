import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import InputContainer from '../../components/InputContainer/InputContainer';
import { SignUpData } from './SignUpData';

import {
  firebaseAuth,
  createUserWithEmailAndPassword,
} from '../../shared/firebase';

const SignUp = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    userName: '',
    userEmail: '',
    userNickName: '',
    userPassword: '',
    userPasswordConfirm: '',
  });

  const [checkboxActive, setCheckboxActive] = useState(false);

  const {
    userName,
    userEmail,
    userNickName,
    userPassword,
    userPasswordConfirm,
  } = inputValue;

  const onChangeValue = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const isConfirmPassword = userPassword === userPasswordConfirm;
  const isValidInput = userName.length >= 2 && userNickName.length >= 2;

  const emailReg = new RegExp('[a-zA-Z0-9.-]\\.[a-zA-Z]{2,6}$');
  const passwordReg = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])(?=.*[0-9])[A-Za-z\\d$@$!%*?&]{8,45}'
  );

  const isCheckboxActive = () => {
    setCheckboxActive(!checkboxActive);
  };

  const isActiveSubmit =
    isValidInput &&
    emailReg.test(userEmail) &&
    passwordReg.test(userPassword) &&
    isConfirmPassword &&
    checkboxActive;
  const onRegister = async () => {
    try {
      const registeredUser = await createUserWithEmailAndPassword(
        firebaseAuth,
        userEmail,
        userPassword
      );
      navigate('/signin');
    } catch (error) {
      if ('auth/invalid-email') {
        alert('이메일 형식을 지켜주세요.');
      } else if ('auth/email-already-in-use') {
        alert('이미 존재하는 이메일 입니다.');
      } else if ('auth/invalid-email') {
        alert('이메일 형식을 지켜주세요.');
      } else if ('auth / weak - password') {
        alert('비밀번호를 6자 이상 입력해주세요.');
      }
    }
  };
  return (
    <main className="flex justify-center items-center w-100% 2xl:h-750px xl:h-750px lg:h-750px md:h-700px sm:h-650px xs:h-650px bg-black">
      <main className="2xl:w-400px 2xl:h-[680px] xl:w-400px xl:h-[680px] lg:w-400px lg:h-[680px] md:w-300px md:h-550px sm:w-250px sm:h-[530px] xs:w-200px xs:h-500px py-30px text-light-gray font-antonio">
        <section className="flex flex-col justify-center items-center">
          <p className="flex items-start 2xl:w-[320px] xl:w-[320px] lg:w-[320px] md:w-250px sm:w-200px xs:w-160px 2xl:text-30px xl:text-30px lg:text-30px md:text-20px sm:text-16px xs:text-16px mb-20px text-main-blue font-bold">
            SIGN UP
          </p>
          {SignUpData.map((list, index) => {
            return (
              <InputContainer
                key={index}
                id={list.id}
                name={list.name}
                title={list.title}
                type={list.type}
                placeholder={list.placeholder}
                message={list.message}
                onChange={event => {
                  onChangeValue(event);
                }}
              />
            );
          })}
          <div className="flex 2xl:w-[320px] xl:w-[320px] lg:w-[320px] md:w-250px sm:w-200px xs:w-160px my-20px">
            <input
              type="checkbox"
              className="2xl:w-20px 2xl:h-20px xl:w-20px xl:h-20px lg:w-20px lg:h-20px md:w-[15px] md:h-[15px] sm:w-[15px] sm:h-[15px] accent-black"
              onClick={isCheckboxActive}
            />
            <p className="2xl:text-16px xl:text-16px lg:text-15px md:text-12px sm:text-12px xs:text-10px ml-10px">
              개인정보 활용에 동의합니다.
            </p>
          </div>
          <div className="flex items-center justify-center my-20px">
            <div className="flex justify-between 2xl:w-[220px] xl:w-[220px] lg:w-[220px] md:w-150px sm:w-140px xs:w-120px mr-30px">
              <button
                type="button"
                className={`${
                  isActiveSubmit
                    ? '2xl:w-100px 2xl:h-40px xl:w-100px xl:h-40px lg:w-100px lg:h-40px md:w-70px md:h-30px md:text-14px sm:w-60px sm:h-30px sm:text-10px xs:w-50px xs:h-30px xs:text-10px mb-20px bg-main-blue text-white border border-light-gray;'
                    : '2xl:w-100px 2xl:h-40px xl:w-100px xl:h-40px lg:w-100px lg:h-40px md:w-70px md:h-30px md:text-14px sm:w-60px sm:h-30px sm:text-10px xs:w-50px xs:h-30px xs:text-10px mb-20px bg-middle-gray text-white border border-light-gray'
                }`}
                disabled={isActiveSubmit ? false : true}
                onClick={() => onRegister()}
              >
                SUBMIT
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
          <div className="flex mr-30px 2xl:text-[16px] xl:text-15px lg:text-15px md:text-12px sm:text-10px xs:text-10px">
            <p>이미 회원가입을 하셨다면 |&nbsp;</p>
            <p>SIGN IN</p>
          </div>
        </section>
      </main>
    </main>
  );
};
export default SignUp;
