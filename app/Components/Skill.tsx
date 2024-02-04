import React from "react";
export default function Skill() {
  return (
    <div className="content">
      <div className="flex p-10">
        <div className=" flex flex-col items-center gap-16">
          <img src="/HTML5-Logo.webp" alt="none" className="w-8/12" />
          <img src="/CSS-Logo.png" alt="none" className="w-12/12" />
          <img
            src="/logo-javascript_2x_cpugmu.png"
            alt="none"
            className="w-8/12"
          />
        </div>
        <div className=" flex flex-col items-center gap-1">
          <img src="/bootstrap-stack.png" alt="none" className="w-6/12" />
          <img src="/firebase_logo-1.webp" alt="none" />
          <img src="/GitHub-Logo.png" alt="none" className="w-10/12" />
        </div>
        <div className=" flex flex-col items-center gap-11">
          <img src="Node_logo_NodeJS.png" alt="none" className="w-6/12" />
          <img src="React_logo_wordmark.png" alt="none" className="w-9/12" />
          <img
            src="tailwind_2854_logo_1611915867_tqdmp.png"
            alt="none"
            className="w-10/12"
          />
        </div>
      </div>
    </div>
  );
}
