import React from 'react';
import bannerImage from '../assets/pp.jpg';
import bannerBackground from '../assets/banner_wallpaper.svg';
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";
const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["React Developer", "Frontend Developer", "Backend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div style={{backgroundImage: `url(${bannerBackground})`,
    backgroundSize:'cover',}}  
    className="main-container flex  items-center">
        <div className=" w-full flex justify-center text-white ">{/*text*/}
            <div className="w-2/3 ms-4">
            <h3 className="  text-3xl font-semibol`d">Hi i am</h3>
            <h1 className=" mt-3 text-5xl font-bold">Ashim Poudel</h1>
            <h2 className=" mt-3 text-2xl font-bold">And  I am <span ref={el}></span></h2>
            <p className="mt-3"> I am a passionate frontend developer specializing in React and modern web technologies. I love creating interactive and user-friendly web applications. Always eager to learn new skills and tackle new challenges.
            </p>
            <div className="icons-container flex space-x-5">

            <a className="border bg-white cursor-pointer w-14 h-14 rounded-full flex justify-center items-center ">
                <i class="fa-brands text-black text-4xl fa-facebook" ></i>
            </a>
    
            <a className="border bg-white cursor-pointer w-14 h-14 rounded-full flex justify-center items-center ">
            <i class="fa-brands text-black text-4xl fa-youtube"></i>
            </a>

            <a className="border  bg-white cursor-pointer w-14 h-14 rounded-full flex justify-center items-center ">
            <i class="fa-brands text-black  text-4xl fa-linkedin"></i>
            </a>

            <a className="border bg-white cursor-pointer w-14 h-14 rounded-full flex justify-center items-center ">
            <i class="fa-brands text-black   text-4xl fa-instagram"></i>
            </a>
            </div>
            <br/>
            <a className="px-3 py-2 bg-orange-500 rounded-full my-2" href="/contact">Contact me</a>
        </div>
        </div>
        <div className=" w-full h-100 flex justify-center ">{/*text*/}
            {/*image*/}
            <img  className="rounded-full h-98 py-1 shadow-lg w-fit" src={bannerImage} alt="" />
        </div>
        </div>
        
  );
};

export default Banner