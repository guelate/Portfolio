"use client";

import Description from "./Description";
import ProfilPicture from "./ProfilPicture";

export default function HomeHeader() {
  return (
    <div id="Home" className="flex flex-col bg-gray-100 relative top-14 p-4 justify-center items-center text-center">
      <ProfilPicture />
      <Description />
    </div>
  );
}