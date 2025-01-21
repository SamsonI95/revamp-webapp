import React from "react";

// Icon(s)
import {
  MdOutlineAlternateEmail,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="my-10 mx-auto space-y-8">
        {/* <section className="flex flex-col items-center justify-center">
          <MdOutlineKeyboardDoubleArrowUp className="text-4xl"/>
          <h3 className="font-bold">BACK TO TOP</h3>
        </section> */}
        <section className="flex justify-center space-x-4">
          <a href="mailto:iebunorun@gmail.com">
            <MdOutlineAlternateEmail className="text-[3rem]" />
          </a>
          <a href="https://github.com/SamsonI95">
            <FaGithub className="text-[3rem]" />
          </a>
          <a href="https://www.linkedin.com/in/samsoniweibo/">
            <FaLinkedin className="text-[3rem]" />
          </a>
        </section>
        <section className="space-y-2">
          <h3>
            Desgined by: <a className="font-bold text-2xl" href="https://github.com/nerooc">Tomasz Gajda</a>
          </h3>
          <p>© 2020 Tomasz Gajda All Rights Reserved.</p>
        </section>
      </div>
    </>
  );
};

export default Footer;
