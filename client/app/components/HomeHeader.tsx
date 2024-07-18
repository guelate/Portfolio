"use client";

import Description from "./Description";
import ProfilPicture from "./ProfilPicture";

export default function HomeHeader() {
  return (
    <div className="">
      <ProfilPicture />
      <Description />
    </div>
  );
}