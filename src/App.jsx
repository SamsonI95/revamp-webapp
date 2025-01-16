import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

// Component(s)
import Header from "./component/Header";

// Icon(s)
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";

// Image(s)
import Avatar from "/src/NewAvatar.png";
import html from "/src/html.svg";
import css from "/src/css.svg";
import javascript from "/src/icons8-javascript.svg";
import react from "/src/react.svg";
import tailwind from "/src/icons8-tailwind-css.svg";
import firebase from "/src/firebase-svgrepo-com.svg";

function App() {
  //Scroll to Top
  const [isVisible, setIsVisible] = useState(false);

  const arrowToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        // Adjust threshold as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col w-full h-full">
        <Header />
        <section id="home" className="md:hidden w-fit h-[750px]">
          <img className="md:hidden" src={Avatar} alt="Avatar" />
          <div className="mobile-about-style md:hidden px-7 flex justify-between">
            <div className="text-white relative top-[10rem] space-y-2">
              <p className="text-2xl">Hi, I am</p>
              <h3 className="text-4xl font-bold">Samson Iweibo</h3>
              <p className="text-2xl">Front-end developer</p>
            </div>
            <div className="text-white relative top-[5rem] space-y-7">
              <MdOutlineAlternateEmail className="text-[3rem]" />
              <FaGithub className="text-[3rem]" />
              <FaLinkedin className="text-[3rem]" />
            </div>
          </div>
        </section>
        <section
          id="home"
          className="hidden md:flex items-center justify-between"
        >
          <div className="desktop-about-style">
            <div className="relative top-[8rem] left-[28px]">
              <div className="text-black">
                <p className="text-[40px] font-bold">Hi, I am</p>
                <h3 className="text-[60px] font-bold">Samson Iweibo</h3>
                <p className="text-[40px] text-[#909090]">
                  Front-end developer
                </p>
              </div>
              <div className="flex mt-5 space-x-7">
                <Link to="">
                  <MdOutlineAlternateEmail className="text-[3rem]" />
                </Link>
                <Link to="">
                  <FaGithub className="text-[3rem]" />
                </Link>
                <Link to="">
                  <FaLinkedin className="text-[3rem]" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-centerborder rounded-full w-[550px] h-[550px] bg-white">
            <img
              className="relative left-[25px]"
              src={Avatar}
              alt="Avatar"
              width={500}
            />
          </div>
        </section>
        <section
          id="about"
          className="w-fit h-fit mt-[10rem] lg:mt-[142px] flex flex-col items-center px-7 lg:px-0 space-y-[4rem]"
        >
          <div className="border-8 p-8 w-[268px] text-center">
            <h3 className="text-white font-bold text-xl lg:text-3xl">
              ABOUT ME
            </h3>
          </div>
          <p className="text-2xl">
            Hi there! I’m Samson Ebunorun Iweibo, a passionate web developer
            dedicated to crafting modern, user-friendly, and efficient digital
            solutions. With a strong foundation in coding and an eye for design,
            I specialize in building responsive websites and applications that
            deliver exceptional user experiences.
          </p>
          <div className="border-x-[5px] w-[148px] text-center">
            <h3>EXPLORE</h3>
          </div>
          <div class="separator">
            <span class="line"></span>
            <span class="slashes">//\\</span>
            <span class="line"></span>
          </div>
          <div className="space-y-8">
            <section className="space-y-2">
              <h3 className="text-2xl">DESIGN</h3>
              <p className="text-[#909090] text-lg">
                I specialize in designing and developing websites tailored to
                your unique needs and preferences. Whether you have a specific
                vision or need guidance, I’m here to collaborate and bring your
                ideas to life.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="text-2xl">DEVELOPMENT</h3>
              <p className="text-[#909090] text-lg">
                I can create fully functional and responsive websites from
                scratch, consulting with you throughout the process to ensure
                the final result aligns perfectly with your goals.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="text-2xl">MAINTENANCE</h3>
              <p className="text-[#909090] text-lg">
                If you have an existing project—whether it’s one I’ve created or
                provided by you—I can enhance it, implement new features, or
                address any issues. My focus is on delivering solutions that are
                not only efficient but also future-ready.
              </p>
            </section>
          </div>
          <div class="separator">
            <span class="line"></span>
            <span class="slashes">//\\</span>
            <span class="line"></span>
          </div>
        </section>
        <section
          id="skills"
          className="mt-[10rem] lg:mt-[142px] mx-auto space-y-[4rem]"
        >
          <div className="border-8 p-8 w-[268px] text-center">
            <h3 className="text-white font-bold text-xl lg:text-3xl">SKILLS</h3>
          </div>
          <ul className="space-y-7 flex flex-col items-center">
            <li className="text-center">
              <img
                src={html}
                alt="html"
                className="w-[100px] h-[100px] lg:w-[48px] lg:h-[48px]"
              />
              <p className="mt-4 text-2xl">HTML5</p>
            </li>
            <li className="text-center">
              <img
                src={css}
                alt="css"
                className="w-[100px] h-[100px] lg:w-[48px] lg:h-[48px]"
              />
              <p className="mt-4 text-2xl">CSS</p>
            </li>
            <li className="text-center">
              <img
                src={javascript}
                alt="js"
                className="w-[100px] h-[100px] lg:w-[48px] lg:h-[48px]"
              />
              <p className="mt-4 text-2xl">JS6</p>
            </li>
            <li className="text-center">
              <img
                src={react}
                alt="react"
                className="w-[100px] h-[100px] lg:w-[48px] lg:h-[48px]"
              />
              <p className="mt-4 text-2xl">REACT</p>
            </li>
            <li className="text-center">
              <img
                src={tailwind}
                alt="twcss"
                className="w-[100px] h-[100px] lg:w-[48px] lg:h-[48px] mx-auto"
              />
              <p className="mt-4 text-2xl">TAILWIND CSS</p>
            </li>
            <li className="text-center">
              <img
                src={firebase}
                alt="firebase"
                className="w-[100px] h-[100px] lg:w-[48px] lg:h-[48px]"
              />
              <p className="mt-4 text-2xl">FIREBASE</p>
            </li>
          </ul>
        </section>
        <section
          id="portfolio"
          className="mt-[10rem] lg:mt-[142px] mx-auto space-y-[4rem]"
        >
          <div className="background border-8 p-8 w-[268px] text-center">
            <h3 className="text-white font-bold text-xl lg:text-3xl">
              PORTFOLIO
            </h3>
          </div>
          
        </section>
        <section>
          <button
            onClick={arrowToTop}
            className={`fixed text-4xl bottom-10 right-5 z-10 rounded-full text-black px-4 py-2`}
          >
            <IoIosArrowDropupCircle />
          </button>
        </section>
      </div>
    </>
  );
}

export default App;
