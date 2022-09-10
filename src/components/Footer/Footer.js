import React, { useState, useEffect, useRef } from 'react';
import { FaRegSmileWink } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center max-w-100% h-300px bg-deep-gray py-30px text-middle-gray shadow-bar-shadow z-10">
      <section className="flex flex-col items-center">
        <p className="text-20px font-bold">© 2022 TO-DO-LIST</p>
        <img className="w-20%" src="/images/to-do-list-logo.png" alt="logo" />
      </section>
      <section className="flex justify-between items-center w-20% h-60px">
        <p>EMAIL</p>
        <p>GITHUB</p>
        <p>BLOG</p>
      </section>
      <section className="flex flex-col justify-between h-60px mt-20px">
        <p className="text-18px font-bold">Niboo's Toy Project</p>
        <span className="flex items-center justify-center">
          <FaRegSmileWink />
          <p className="ml-10px">NA EUN LEE</p>
        </span>
      </section>
    </footer>
  );
};
export default Footer;
