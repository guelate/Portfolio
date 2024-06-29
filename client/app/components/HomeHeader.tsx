"use client";

import Description from "./Description";
import ProfilPicture from "./ProfilPicture";

export default function HomeHeader() {
  return (
    <div className="justify px-60">
      <ProfilPicture />
      <Description />
    </div>
  );
}
