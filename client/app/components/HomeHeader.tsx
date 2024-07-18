// "use client";

// import Description from "./Description";
// import ProfilPicture from "./ProfilPicture";

// export default function HomeHeader() {
//   return (
//     <div className="justify px-60 bg-gray-100">
//       <ProfilPicture />
//       <Description />
//     </div>
//   );
// }

"use client";

import Description from "./Description";
import ProfilPicture from "./ProfilPicture";

export default function HomeHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-20 lg:px-60 bg-gray-100 space-y-4 md:space-y-0 md:space-x-4">
      <ProfilPicture />
      <Description />
    </div>
  );
}