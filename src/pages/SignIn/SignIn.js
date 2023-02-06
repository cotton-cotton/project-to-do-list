import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import InputContainer from '../../components/InputContainer/InputContainer';
import { firebaseAuth } from '../shared/firebase';
import { SignInData } from './SignInData';

const SignIn = () => {
  const [inputValue, setInputValue] = useState({
    userEmail: '',
    userPassword: '',
  });

  const [emailVal, setEmailVal] = useState(false);
  const [passwordVal, setPasswordVal] = useState(false);

  const { userEmail, userPassword } = inputValue;

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const isValidLetter = userEmail.length >= 1 && userPassword.length >= 1;

  const emailReg = new RegExp('[a-zA-Z0-9.-]\\.[a-zA-Z]{2,6}$');
  const passwordReg = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])(?=.*[0-9])[A-Za-z\\d$@$!%*?&]{8,45}'
  );

  const isActiveSubmit =
    emailReg.test(userEmail) && passwordReg.test(userPassword) && isValidLetter;

  const emailValidation = event => {
    const inputVal = event.target.value;
    if (emailReg.test(inputVal)) {
      setEmailVal(true);
    } else if (!emailReg.test(inputVal)) {
      setEmailVal(false);
    }
  };

  const passwordValidation = event => {
    const inputVal = event.target.value;
    if (passwordReg.test(inputVal)) {
      setPasswordVal(true);
    } else if (!passwordReg.test(inputVal)) {
      setPasswordVal(false);
    }
  };

  const onLogin = async () => {
    try {
      const userData = await signInWithEmailAndPassword(
        firebaseAuth,
        userEmail,
        userPassword
      );

      localStorage.setItem('token', JSON.stringify(userData.user.uid));

      alert(`환영합니다!`);
      window.location.replace('/');
    } catch (error) {
      alert('잘못된 정보입니다.');
    }
  };
  return (
    <main className="flex justify-center items-center w-100% 2xl:h-750px xl:h-750px lg:h-750px md:h-700px sm:h-650px xs:h-650px bg-black">
      <main className="2xl:w-400px 2xl:h-[680px] xl:w-400px xl:h-[680px] lg:w-400px lg:h-[680px] md:w-300px md:h-550px sm:w-250px sm:h-[530px] xs:w-200px xs:h-500px py-30px text-light-gray font-antonio">
        <section className="flex flex-col items-center">
          <p className="flex items-start 2xl:w-[320px] xl:w-[320px] lg:w-[320px] md:w-250px sm:w-200px xs:w-160px 2xl:text-1.875rem xl:text-1.875rem lg:text-1.875rem md:text-1.25rem sm:text-16px xs:text-1rem mb-20px text-main-blue font-bold">
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
                  message={list.message}
                  onChange={event => {
                    handleInput(event);
                    emailValidation(event);
                    passwordValidation(event);
                  }}
                  emailVal={emailVal}
                  passwordVal={passwordVal}
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
                    ? '2xl:w-100px 2xl:h-40px 2xl:text-1.125rem xl:w-100px xl:h-40px xl:text-1.125rem lg:w-100px lg:h-40px lg:text-1.125rem md:w-70px md:h-30px md:text-0.875rem sm:w-60px sm:h-30px sm:text-10px xs:w-50px xs:h-30px xs:text-0.625rem mb-20px bg-main-blue text-white border border-light-gray;'
                    : '2xl:w-100px 2xl:h-40px 2xl:text-1.125rem xl:w-100px xl:h-40px xl:text-1.125rem lg:w-100px lg:h-40px lg:text-1.125rem md:w-70px md:h-30px md:text-0.875rem sm:w-60px sm:h-30px sm:text-10px xs:w-50px xs:h-30px xs:text-0.625rem mb-20px bg-middle-gray text-white border border-light-gray'
                }`}
                disabled={isActiveSubmit ? false : true}
                onClick={onLogin}
              >
                SIGN IN
              </button>
              <Link to="/">
                <button
                  type="button"
                  className="2xl:w-100px 2xl:h-40px 2xl:text-1.125rem xl:w-100px xl:text-1.125rem xl:h-40px lg:w-100px lg:h-40px lg:text-1.125rem md:w-70px md:h-30px md:text-0.875rem sm:w-60px sm:h-30px sm:text-0.625rem xs:w-50px xs:h-30px xs:text-0.625rem mb-20px bg-main-blue text-white border border-light-gray
              "
                >
                  CANCEL
                </button>
              </Link>
            </div>
          </div>
          <div className="flex mb-20px mr-30px 2xl:text-1rem xl:text-0.938rem lg:text-0.938rem md:text-0.75rem sm:text-0.625rem xs:text-0.625rem">
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
