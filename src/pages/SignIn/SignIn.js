import React from 'react';
import InputContainer from '../../components/InputContainer/InputContainer';
import { SignInData } from './SignInData';

const SignIn = () => {
  return (
    <main className="flex justify-center items-center max-w-100% h-680px">
      <main className="w-23% h-90% py-30px bg-deep-gray text-light-gray font-antonio">
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
              />
            );
          })}
          <div className="flex justify-between w-50% my-40px">
            <button
              type="button"
              className="w-100px h-40px bg-main-blue text-light-gray"
            >
              SIGN IN
            </button>
            <button
              type="button"
              className="w-100px h-40px mb-20px bg-main-blue text-light-gray"
            >
              CANCEL
            </button>
          </div>
          <div className="flex mb-20px">
            <p>회원가입이 필요하신가요? |&nbsp;</p>
            <p>SIGN UP</p>
          </div>
          <div className="flex">
            <p>아이디 찾기 |&nbsp;</p>
            <p>비밀번호 재설정</p>
          </div>
        </section>
      </main>
    </main>
  );
};
export default SignIn;
