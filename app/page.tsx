"use client";
import { useState } from "react";
import Image from "next/image";

//component
import Home from "./Components/Home";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";
import Education from "./Components/Education";

export default function Page() {
  const [showComponet, setShowComponet] = useState(<Home></Home>);
  return (
    <div className="flex h-screen">
      <div className=" w-2/6  bg-slate-100 flex flex-col items-center shadow-xl shadow-slate-400">
        <Image
          src="/_DSF7162.JPG"
          alt="none"
          className=" mt-12 w-3/6 rounded-full shadow-lg  border-2 border-gray-300"
          width={600}
          height={400}
        ></Image>
        <div className=" mt-5 flex flex-col items-start gap-4 text-1xl">
          <div
            className="  hover-pointer "
            onClick={() => setShowComponet(<Home></Home>)}
          >
            <div className=" text-3xl underline underline-offset-2">
              Theerawat
            </div>
            <div className="underline underline-offset-2">
              Sinphatthanasakunkit
            </div>
          </div>
          <div
            onClick={() => setShowComponet(<About></About>)}
            className=" mt-10 px-1 tracking-widest text-neutral-700 hover:text-white hover:bg-gray-300 hover:rounded-full
            hover-pointer hover:scale-105"
          >
            About
          </div>
          <div
            onClick={() => setShowComponet(<Skill></Skill>)}
            className=" px-1 tracking-widest text-neutral-700 hover:text-white hover:bg-gray-300 hover:rounded-full 
          hover-pointer hover:scale-105 "
          >
            Skill
          </div>

          <div
            onClick={() => setShowComponet(<Projects></Projects>)}
            className=" px-1 tracking-widest text-neutral-700 hover:text-white hover:bg-gray-300 hover:rounded-full 
           hover-pointer hover:scale-105 "
          >
            Projects
          </div>
          <div
            onClick={() => setShowComponet(<Education></Education>)}
            className=" px-1 tracking-widest text-neutral-700 hover:text-white hover:bg-gray-300 hover:rounded-full 
          hover-pointer hover:scale-105 "
          >
            Education
          </div>
        </div>
      </div>
      <div className=" w-screen ">{showComponet}</div>
      <Image
        src="/_DSF7162.png"
        alt="none"
        className=" z-50 fixed w-2/12 right-0 bottom-0 fade-in"
        width={600}
        height={400}
      ></Image>
    </div>
  );
}
