import { Link } from "react-router-dom";
import "./App.css";

// Component(s)
import Header from "./component/Header";

// Icon(s)
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

// Image(s)
import Avatar from "/NewAvatar.png";

function App() {
  return (
    <>
      <div>
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
            <img className="relative left-[25px]" src={Avatar} alt="Avatar" width={500} />
          </div>
        </section>
        
      </div>
    </>
  );
}

export default App;
