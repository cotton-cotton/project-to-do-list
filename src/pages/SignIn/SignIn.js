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
    <main className="flex justify-center items-center max-w-100% h-750px bg-black">
      <main className="w-23% h-90% py-30px text-light-gray font-antonio">
        <section className="flex flex-col items-center">
          <p className="flex items-start w-80% mb-30px text-30px text-main-blue font-bold">
            SIGN IN
          </p>
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
          <div className="flex items-center justify-center w-80% mt-[70px] mb-20px">
            <div className="flex justify-between w-[68%] mr-30px">
              <button
                type="button"
                className={`${isActiveSubmit ? 'active-btn' : 'inActive-btn'}`}
                onClick={() => onLogin()}
              >
                SIGN IN
              </button>
              <Link to="/">
                <button
                  type="button"
                  className="w-100px h-40px mb-20px bg-main-blue text-white border border-light-gray"
                >
                  CANCEL
                </button>
              </Link>
            </div>
          </div>
          <div className="flex mb-20px mr-30px">
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
