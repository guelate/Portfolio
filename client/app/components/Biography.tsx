"use client";
import { useEffect, useState } from "react";

export default function Biography() {
  const [text, setText] = useState("Bonjour tout le monde !");

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => {
        if (prevText === "Bonjour tout le monde !") {
          return "hello world !";
        } else if (prevText === "hello world !") {
          return "Cia, mondo !";
        } else {
          return "Bonjour tout le monde !";
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-2/4 mt-4 text-center">
      <h2 className="items-center gap-1 shadow-yellow-300 dark:text-shadow-none min-h-8 text-biography">
        <p className="motion-safe:animate-wave text-2xl md:text-3xl font-bold tracking-tight text-blue-300 hover:text-blue-400" role="img">
          {text}
          <span className="wave-hand">👋</span>
        </p>
      </h2>
      <p  className="text-biography text-gray-600">
        Passionate web developer with a preference for technologies like NextJS,
        TypeScript, Taiwlindcss and Shadcn /ui. I enjoy crafting innovative web
        projects and building SaaS applications.
      </p>
    </div>
  );
}
