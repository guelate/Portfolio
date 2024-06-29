"use client";
import { useEffect, useState } from "react";
import LabelLine from "./LabelLine";

export default function Description() {
  const [text, setText] = useState("Ciao, mondo"); // add more text: Bonjour tout le monde, hello world, Ciao mondo

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) =>
        prevText === "Ciao, mondo" ? "hello world" : "Ciao, mondo"
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    //   <div className="block border justify-center">
    //     <p className="flex flex-row items-center gap-1 text-shadow shadow-yellow-300 dark:text-shadow-none min-h-8">
    //       <span
    //         className="inline-block text-primary-txt motion-safe:animate-wave"
    //         role="img"
    //         aria-label="waving hand"
    //       >
    //         {text}
    //         <span className="wave-hand">👋</span>
    //       </span>
    //     </p>
    //     <h3>Hey ! I'm Killian 😉</h3>
    //     <p>I build web applications that turn ideas into reality 💭💻</p>
    //   </div>
    // );

    <div className="flex flex-col justify-center items-center text-center">
      <p className="flex flex-row items-center gap-1 text-shadow shadow-yellow-300 dark:text-shadow-none min-h-8">
        <span
          className="inline-block text-primary-txt motion-safe:animate-wave"
          role="img"
          aria-label="waving hand"
        >
          {text}
          <span className="wave-hand">👋</span>
        </span>
      </p>
      <h3>Hey ! I'm Killian 😉</h3>
      <p>I build web applications that turn ideas into reality 💭💻</p>
      <div className="py-4">
        <LabelLine />
      </div>
    </div>
  );
}
