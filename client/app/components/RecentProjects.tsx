import SionService from "../../public/SionService.png";
import Metro from "../../public/Metro.png";
import EnvoitureE from "../../public/EnvoitureE.png";
import CardRecentProject from "./CardRecentProject";
import CardVeepeeProject from "./CardVeepeeProject";

//TODO: REPLACE START WITH SIGN FOR DONE OR WIP
export default function RecentProjects() {
  const badgeData3 = [
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
  const badgeData4 = [
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
      <div className="flex flex-col">
        <div className="flex flex-col text-center p-8 gap-5 my-6 md:px-10 lg:px-48">
          <h1
            id="SomeProject"
            className="text-3xl md:text-4xl font-bold tracking-tight text-blue-300 hover:text-blue-400"
          >
            My Freelance Mission
          </h1>
          <p className="text-lg md:text-xl text-gray-600 text-left">
            As a freelance web developer, my mission is to create beautiful,
            functional websites and web applications that help businesses and
            individuals achieve their online goals. I&apos;m passionate about
            crafting intuitive user experiences, writing clean and efficient
            code, and staying up-to-date with the latest web technologies.
          </p>
        </div>
        <div>
          <div className="flex flex-col border border-gray-100 rounded .rounded bg-gray-50 p-4 md:mx-24 mb-5 md:w-3/4 lg:mx-96 lg:w-2/4">
         
            <div className="flex flex-col gap-4 border border-gray-100 rounded .rounded bg-gray-50 p-4 ">
              <CardVeepeeProject
                id="SionService"
                title="SionService"
                description="This project is a platform where users submit ideas, and only selected ones are developed into projects."
                badges={badgeData3}
              />
              <CardVeepeeProject
                id="Envoiture"
                title="En voiture"
                description="This project is a platform where users submit ideas, and only selected ones are developed into projects."
                badges={badgeData4}
              />
              <CardVeepeeProject
                id="Metro"
                title="Métro"
                description="This project is a platform where users submit ideas, and only selected ones are developed into projects."
                badges={badgeData3}
              />
            </div>
          </div>
        </div>
      </div>
  );
}

// import SionService from "../../public/SionService.png";
// import Metro from "../../public/Metro.png";
// import EnvoitureE from "../../public/EnvoitureE.png";
// import CardRecentProject from "./CardRecentProject";

// //TODO: REPLACE START WITH SIGN FOR DONE OR WIP
// export default function RecentProjects() {
//   return (
//     <div className="w-full max-w-6xl mx-auto py-12 md:py-20">
//       <div className="space-y-8 md:space-y-12">
//         <div className="space-y-4 md:space-y-6">
//           <h1
//             id="SomeProject"
//             className="text-3xl md:text-5xl font-bold tracking-tight text-blue-300 hover:text-blue-400"
//           >
//             My Freelance Mission
//           </h1>
//           <p className="text-lg md:text-xl max-w-[800px] text-gray-600">
//             As a freelance web developer, my mission is to create beautiful,
//             functional websites and web applications that help businesses and
//             individuals achieve their online goals. I&apos;m passionate about
//             crafting intuitive user experiences, writing clean and efficient
//             code, and staying up-to-date with the latest web technologies.
//           </p>
//         </div>
//         <div>
//           <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-300 hover:text-blue-400">
//             Recent Projects// TODO: complete both component with button:
//             complete or WIP and add also button more for look readmee + make
//             description also // menu fixed
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             <CardRecentProject
//             id="SionService"
//               href=""
//               src={SionService}
//               alt="Project 3"
//               title="SionService"
//               description="This project is a platform where users submit ideas, and only selected ones are developed into projects."
//             />
//             <CardRecentProject
//               id="Envoiture"
//               href=""
//               src={EnvoitureE}
//               alt="Project 3"
//               title="En voiture"
//               description="This project is a platform where users submit ideas, and only selected ones are developed into projects."
//               />
//             <CardRecentProject
//               id="Metro"
//               href=""
//               src={Metro}
//               alt="Project 3"
//               title="Métro"
//               description="This project is a platform where users submit ideas, and only selected ones are developed into projects."
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
