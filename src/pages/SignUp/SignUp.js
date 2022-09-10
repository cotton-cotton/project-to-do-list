import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import InputContainer from '../../components/InputContainer/InputContainer';
import { SignUpData } from './SignUpData';

import {
  firebaseAuth,
  createUserWithEmailAndPassword,
} from '../../shared/firebase';

const USER_NAME_DATA = [];
const USER_NICKNAME_DATA = [];
const USER_PASSWORD_DATA = [];

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
  const [equalPassword, setEqualPassword] = useState(false);

  const [nameVal, setNameVal] = useState(false);
  const [emailVal, setEmailVal] = useState(false);
  const [nickNameVal, setNickNameVal] = useState(false);
  const [passwordVal, setPasswordVal] = useState(false);
  const [confirmVal, setConfirmVal] = useState(false);

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

  const emailReg = new RegExp('[a-zA-Z0-9.-]\\.[a-zA-Z]{2,6}$');
  const passwordReg = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])(?=.*[0-9])[A-Za-z\\d$@$!%*?&]{8,45}'
  );
  //작동안됨
  // const isPasswordConfirm = userPassword === userPasswordConfirm;

  // const isPasswordConfirm = () => {
  //   console.log(userPassword);
  //   console.log(userPasswordConfirm);
  //   if (userPassword === userPasswordConfirm) {
  //     setEqualPassword(true);
  //   } else {
  //     setEqualPassword(false);
  //   }
  // };

  // console.log(equalPassword);

  const isCheckboxActive = () => {
    setCheckboxActive(!checkboxActive);
  };

  const isActiveSubmit =
    userName.length <= 2 &&
    userNickName.length <= 2 &&
    // passwordReg.test(userPassword) &&
    checkboxActive;

  // const isCheckedValidation = event => {
  //   const name = event.target.name;
  //   const inputVal = event.target.value.length;

  //   name === 'userName' && inputVal > 1 ? setNameVal(true) : setNameVal(false);
  //   name === 'userEmail' && emailReg.test(userEmail)
  //     ? setEmailVal(true)
  //     : setEmailVal(false);
  //   name === 'userNickName(ID)' && inputVal > 1
  //     ? setNickNameVal(true)
  //     : setNickNameVal(false);
  //   name === 'userPassword' && passwordReg.test(userPassword)
  //     ? setPasswordVal(true)
  //     : setPasswordVal(false);
  //   // isPasswordConfirm ? setConfirmVal(true) : setConfirmVal(false);
  // };
  // console.log(nameVal);
  // console.log(emailVal);
  // console.log(passwordVal);
  const onRegister = async () => {
    try {
      const createdUser = await createUserWithEmailAndPassword(
        firebaseAuth,
        userEmail,
        userPassword
      );

      console.log(createdUser);
      localStorage.setItem('user', JSON.stringify(userNickName));
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
    <main className="flex justify-center items-center max-w-100% h-750px">
      <main className="w-23% h-90% py-30px bg-deep-gray text-light-gray font-antonio">
        <section className="flex flex-col items-center">
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
                  // isPasswordConfirm(event);
                  //isCheckedValidation(event);
                }}
                nameVal={nameVal}
                emailVal={emailVal}
                nickNameVal={nickNameVal}
                passwordVal={passwordVal}
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
          <div className="flex justify-between w-50% my-20px">
            <button
              type="button"
              className={`${isActiveSubmit ? 'active-btn' : 'inActive-btn'}`}
              // disabled={isActiveSubmit ? false : true}
              onClick={() => onRegister()}
            >
              SUBMIT
            </button>
            <Link to="/">
              <button
                type="button"
                className="w-100px h-40px mb-20px bg-main-blue text-light-gray border border-light-gray
              "
              >
                CANCEL
              </button>
            </Link>
          </div>
          <div className="flex">
            <p>이미 회원가입을 하셨다면 |&nbsp;</p>
            <p>SIGN IN</p>
          </div>
        </section>
      </main>
    </main>
  );
};
export default SignUp;
