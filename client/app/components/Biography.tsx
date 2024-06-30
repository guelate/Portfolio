"use client";
import { useEffect, useState } from "react";

export default function Biography() {
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
    <div className="w-2/4">
      <h2 className="flex flex-row items-center gap-1 text-shadow shadow-yellow-300 dark:text-shadow-none min-h-8">
        <span
          className="inline-block text-primary-txt motion-safe:animate-wave"
          role="img"
          aria-label="waving hand"
          >
          {text}
          <span className="wave-hand">👋</span>
        </span>
      </h2>
    {/* TODO: revoir le text en balise <p> </p> */}
      <p>
        Passionate web developer with a preference for technologies
        like NextJS, React, and TypeScript. I enjoy crafting innovative web
        projects and building SaaS applications.
      </p>
    </div>
  );
}
