import React from "react";
import Image from "next/image";
export default function Skill() {
  return (
    <div className="content">
      <div className="flex p-10">
        <div className=" flex flex-col items-center gap-16">
          <Image
            src="/HTML5-Logo.webp"
            alt="none"
            className="w-5/12"
            width={600}
            height={400}
          ></Image>
          <Image
            src="/CSS-Logo.png"
            alt="none"
            className="w-8/12"
            width={600}
            height={600}
          ></Image>
          <Image
            src="/logo-javascript_2x_cpugmu.png"
            alt="none"
            className="w-5/12"
            width={600}
            height={600}
          ></Image>
        </div>
        <div className=" flex flex-col items-center gap-1">
          <Image
            src="/bootstrap-stack.png"
            alt="none"
            className="w-6/12"
            width={600}
            height={600}
          ></Image>
          <Image
            src="/firebase_logo-1.webp"
            alt="none"
            className="w-10/12"
            width={600}
            height={600}
          ></Image>
          <Image
            src="/GitHub-Logo.png"
            alt="none"
            className="w-10/12"
            width={600}
            height={600}
          ></Image>
        </div>
        <div className=" flex flex-col items-center gap-11">
          <Image
            src="/Node_logo_NodeJS.png"
            alt="none"
            className="w-8/12"
            width={600}
            height={600}
          ></Image>
          <Image
            src="/React_logo_wordmark.png"
            alt="none"
            className="w-10/12 mt-4"
            width={600}
            height={600}
          ></Image>
          <Image
            src="/tailwind_2854_logo_1611915867_tqdmp.png"
            alt="none"
            className="w-10/12"
            width={600}
            height={600}
          ></Image>
        </div>
      </div>
    </div>
  );
}
