import React from "react";
import Image from "next/image";

export default function Education() {
  return (
    <div className="content">
      <div className=" mt-10 text-4xl text-center tracking-widest">
        EDUCATION
      </div>
      <div className=" mt-5">
        <div className=" flex flex-col items-center">
          <Image
            src="/ตราโรงเรียนเชียงคาน.png"
            alt=""
            className="w-1/12"
            width={600}
            height={400}
          ></Image>
          <div>Chiang Khan School</div>
        </div>
        <div className=" flex flex-col items-center">
          <Image
            src="/lru.png"
            alt=""
            className="w-1/12"
            width={600}
            height={400}
          ></Image>
          <div>2013 - 2016</div>
          <div>Loei Rajabhat University</div>
          <div>Faculty of Management Science</div>
          <div>Business Computer</div>

          <div className=" mt-10 text-3xl text-center tracking-widest">
            EXPERIENCE
          </div>
          <div className=" mt-5">2017-2020</div>
          <div>Position Photo Editor</div>
          <div>SCHNELLMEDIA ASIA COMPANY</div>
        </div>
      </div>
    </div>
  );
}
