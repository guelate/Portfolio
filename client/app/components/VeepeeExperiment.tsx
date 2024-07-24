import CardVeepeeProject from "./CardVeepeeProject";
import Moderation from "../../public/Moderation.jpg";
import VeepeeFinder from "../../public/VeepeeFinder.jpg";
import UpList from "../../public/UpList.png";
import IconsSpace4 from "./IconSpace4";
import IconsSpace5 from "./IconsSpace5";

export default function VeepeeExperiment() {
  const badgeData1 = [
    { text: "NextJS", bgClass: "bg-gray-700", borderClass: "border-gray-800" },
    {
      text: "Typescript",
      bgClass: "bg-sky-500",
      borderClass: "border-sky-500",
    },
    {
      text: "PostgreSQL",
      bgClass: "bg-blue-400",
      borderClass: "border-blue-500",
    },
    {
      text: "Shadcn /UI",
      bgClass: "bg-zinc-400",
      borderClass: "border-zinc-500",
    },
  ];
  const badgeData2 = [
    {
      text: "ReactJS",
      bgClass: "bg-green-700",
      borderClass: "border-gray-800",
    },
    {
      text: "Javascript",
      bgClass: "bg-yellow-400",
      borderClass: "border-yellow-500",
    },

    {
      text: "Styled Components",
      bgClass: "bg-pink-400",
      borderClass: "border-zinc-500",
    },
  ];

  return (
    <div>
      <div className="px-4">
        <IconsSpace4
          src1="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/IconK8s.png"
          src2="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconPrisma.png"
        />
        <div className="flex flex-col p-1 gap-3 text-center">
          <h2 id="MyVeepeeExperience" className="text-2xl md:text-3xl font-bold tracking-tight text-blue-300 hover:text-blue-40">
            My Veepee experience
          </h2>
          <p className="text-left break-words">
            As a web developer, I&apos;m constantly exploring new technologies
            and techniques to push the boundaries of what&apos;s possible on the
            web. At Veepe, I&apos;ve had the opportunity to experiment with a
            wide range of tools and frameworks, from cutting-edge JavaScript
            libraries to innovative design systems.
          </p>
        </div>
        <IconsSpace5
          src1="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconNodeJS.png"
          src2="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/IconNextJS.png"
        />
      </div>

      <div className="flex flex-col gap-4 border border-gray-100 rounded .rounded bg-gray-50 p-4">
        <CardVeepeeProject
          id="Moderation"
          title="Moderation"
          description="This project provides an automated solution for moderating sales content."
          badges={badgeData1}
        />
        <CardVeepeeProject
          id="VeepeeFinder"
          title="VeepeeFinder"
          description="This web extension that recommends you products while you browse certain e-commerce websites."
          badges={badgeData2}
        />
        <CardVeepeeProject
          id="UpList"
          title="UpList"
          description="This web extension that recommends you products while you browse certain e-commerce websites."
          badges={badgeData1}
        />
      </div>
    </div>
  );
}

// import CardVeepeeProject from "./CardVeepeeProject";
// import Moderation from "../../public/Moderation.jpg";
// import VeepeeFinder from "../../public/VeepeeFinder.jpg";
// import UpList from "../../public/UpList.png";
// import IconsSpace4 from "./IconSpace4";

// export default function VeepeeExperiment() {
//   const badgeData1 = [
//     { text: "NextJS", bgClass: "bg-gray-700", borderClass: "border-gray-800" },
//     {
//       text: "Typescript",
//       bgClass: "bg-sky-500",
//       borderClass: "border-sky-500",
//     },
//     {
//       text: "PostgreSQL",
//       bgClass: "bg-blue-400",
//       borderClass: "border-blue-500",
//     },
//     {
//       text: "Shadcn /UI",
//       bgClass: "bg-zinc-400",
//       borderClass: "border-zinc-500",
//     },
//   ];
//   const badgeData2 = [
//     {
//       text: "ReactJS",
//       bgClass: "bg-green-700",
//       borderClass: "border-gray-800",
//     },
//     {
//       text: "Javascript",
//       bgClass: "bg-yellow-400",
//       borderClass: "border-yellow-500",
//     },

//     {
//       text: "Styled Components",
//       bgClass: "bg-pink-400",
//       borderClass: "border-zinc-500",
//     },
//   ];

//   return (
//     <div className="">
//       <div className="flex justify-center mt-20">
//         <IconsSpace4
//           src1="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/IconK8s.png"
//           src2="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconPrisma.png"
//         />
// <div className="block px-4 py-4 text-center">
//   <h2
//     id="MyVeepeeExperience"
//     className="text-3xl font-bold tracking-tighter mb-4 sm:text-4xl md:text-5xl text-blue-300 hover:text-blue-400"
//   >
//     My Veepee experience
//   </h2>
//   <p className="leading-relaxed text-lg mx-auto md:max-w-2xl text-gray-600">
//     As a web developer, I&apos;m constantly exploring new technologies
//     and techniques to push the boundaries of what&apos;s possible on the
//     web. At Veepe, I&apos;ve had the opportunity to experiment with a
//     wide range of tools and frameworks, from cutting-edge JavaScript
//     libraries to innovative design systems.
//   </p>
// </div>
//         <IconsSpace4
//           src1="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconNodeJS.png"
//           src2="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/IconNextJS.png"
//         />
//       </div>

//       <div className="space-y-6 w-2/4 mx-auto mt-20">
//         <CardVeepeeProject
//           id="Moderation"
//           href=""
//           src={Moderation}
//           alt="Project 1"
//           title="Moderation"
//           description="This project provides an automated solution for moderating sales content."
//           badges={badgeData1}
//         />
//         <CardVeepeeProject
//           id="VeepeeFinder"
//           href=""
//           src={VeepeeFinder}
//           alt="Project 2"
//           title="VeepeeFinder"
//           description="This web extension that recommends you products while you browse certain e-commerce websites."
//           badges={badgeData2}
//         />
//         <CardVeepeeProject
//           id="UpList"
//           href=""
//           src={UpList}
//           alt="Project 3"
//           title="UpList"
//           description="This web extension that recommends you products while you browse certain e-commerce websites."
//           badges={badgeData1}
//         />
//       </div>
//     </div>
//   );
// }
