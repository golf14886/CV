import React from "react";
import Image from "next/image";

export default function Projects() {
  return (
    <div className=" mt-60 text-3xl content hover:underline hover:text-blue-500 ">
      <a
        href="https://github.com/golf14886/Tasklist"
        className="flex items-end"
      >
        <Image
          src="/GitHub-Logo.png"
          alt=""
          className="w-2/12"
          width={600}
          height={400}
        ></Image>
        https://github.com/golf14886/Tasklist
      </a>
    </div>
  );
}
