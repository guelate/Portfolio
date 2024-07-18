// "use client";
// import LabelLine from "./LabelLine";

// export default function Description() {

//   return (
//     <div className="flex flex-col justify-center items-center text-center bg-gray-100 text-header">

//       <h3>Hey ! I&apos;m Killian 😉</h3>
//       <p>I build web applications that turn ideas into reality 💭💻</p>
//       <div className="py-4">
//         <LabelLine />
//       </div>
//     </div>
//   );
// }

"use client";
import LabelLine from "./LabelLine";

export default function Description() {
  return (
    <div className="flex flex-col justify-center items-center text-center bg-gray-100 text-header px-4">
      <h3 className="text-xl md:text-2xl md:text-center lg:text-3xl">
        Hey ! I&apos;m Killian 😉
      </h3>
      <p className="text-sm md:text-base lg:text-lg">
        I build web applications that turn ideas into reality 💭💻
      </p>
      <div className="py-4 w-full max-w-xl">
        <LabelLine />
      </div>
    </div>
  );
}
