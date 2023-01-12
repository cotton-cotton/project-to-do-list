import React from 'react';
import { FaRegSmileWink } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center w-100% bg-deep-gray py-30px text-middle-gray shadow-bar-shadow z-10">
      <section className="flex flex-col items-center">
        <p className="xl:text-20px lg:text-18px md:text-18px sm:text-15px xs:text-12px font-bold">
          © 2022 TO-DO-LIST
        </p>
        <img
          className="xl:w-300px lg:w-300px md:w-200px sm:w-200px xs:w-[150px]"
          src="/images/to-do-list-logo.png"
          alt="logo"
        />
      </section>

      <section className="flex justify-between items-center xl:w-[350px] xl:text-18px lg:w-[300px] lg:text-18px md:w-[250px] md:text-14px sm:w-200px sm:text-12px xs:w-[150px] xs:text-12px h-60px">
        <a href="mailto:moonevening08@gmail.com">EMAIL</a>
        <a href="https://github.com/cotton-cotton">GITHUB</a>
        <a href="https://velog.io/@niboo">BLOG</a>
      </section>

      <section className="flex flex-col justify-between h-60px mt-20px">
        <p className="lg:text-18px md:text-18px sm:text-15px xs:text-12px font-bold">
          Niboo's Toy Project
        </p>
        <span className="flex items-center justify-center">
          <FaRegSmileWink />
          <p className="ml-10px lg:text-18px md:text-18px sm:text-15px xs:text-12px">
            NA EUN LEE
          </p>
        </span>
      </section>
    </footer>
  );
};
export default Footer;
