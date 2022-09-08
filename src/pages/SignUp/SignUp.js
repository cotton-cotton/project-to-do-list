import React from 'react';
import InputContainer from '../../components/InputContainer/InputContainer';
import { SignUpData } from './SignUpData';

const SignUp = () => {
  return (
    <main className="flex justify-center items-center max-w-100% h-680px">
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
              />
            );
          })}
          <section className="flex w-80% my-20px">
            <input type="checkbox" className="w-20px h-20px accent-black" />
            <p className="ml-10px">개인정보 활용에 동의합니다.</p>
          </section>
          <div className="flex justify-between w-50% my-20px">
            <button
              type="button"
              className="w-100px h-40px mb-20px bg-main-blue text-light-gray"
            >
              SUBMIT
            </button>
            <button
              type="button"
              className="w-100px h-40px mb-20px bg-main-blue text-light-gray"
            >
              CANCEL
            </button>
          </div>
          <section className="flex">
            <p>이미 회원가입을 하셨다면 |&nbsp;</p>
            <p>SIGN IN</p>
          </section>
        </section>
      </main>
    </main>
  );
};
export default SignUp;
