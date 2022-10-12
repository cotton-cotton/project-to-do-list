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
      const createdUser = await createUserWithEmailAndPassword(
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
    <main className="flex justify-center items-center max-w-100% h-750px bg-black">
      <main className="w-23% h-90% py-30px text-light-gray font-antonio">
        <section className="flex flex-col justify-center items-center">
          <p className="flex items-start w-80% mb-20px text-30px text-main-blue font-bold">
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
          <div className="flex w-80% my-20px">
            <input
              type="checkbox"
              className="w-20px h-20px accent-black"
              onClick={isCheckboxActive}
            />
            <p className="ml-10px">개인정보 활용에 동의합니다.</p>
          </div>
          <div className="flex items-center justify-center w-80% my-20px">
            <div className="flex justify-between w-[68%] mr-30px">
              <button
                type="button"
                className={`${isActiveSubmit ? 'active-btn' : 'inActive-btn'}`}
                disabled={isActiveSubmit ? false : true}
                onClick={() => onRegister()}
              >
                SUBMIT
              </button>
              <Link to="/">
                <button
                  type="button"
                  className="w-100px h-40px mb-20px bg-main-blue text-white border border-light-gray
              "
                >
                  CANCEL
                </button>
              </Link>
            </div>
          </div>
          <div className="flex mr-30px">
            <p>이미 회원가입을 하셨다면 |&nbsp;</p>
            <p>SIGN IN</p>
          </div>
        </section>
      </main>
    </main>
  );
};
export default SignUp;
