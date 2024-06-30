"use client";
import { useEffect, useState } from "react";
import LabelLine from "./LabelLine";

export default function Description() {


  return (
    <div className="flex flex-col justify-center items-center text-center bg-gray-100">
   
      <h3>Hey ! I&apos;m Killian 😉</h3>
      <p>I build web applications that turn ideas into reality 💭💻</p>
      <div className="py-4">
        <LabelLine />
      </div>
    </div>
  );
}
