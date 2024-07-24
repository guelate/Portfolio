import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Info } from "lucide-react";

interface BadgeProps {
  text: string;
  bgClass: string;
  borderClass: string;
}

interface CardVeepeeProjectProps {
  id: string;
  title: string;
  description: string;
  badges: BadgeProps[];
}

export default function CardVeepeeProject({
  id,
  title,
  description,
  badges,
}: CardVeepeeProjectProps) {
  return (
    <Card
      id={id}
      className="bg-gray-200 relative"
    >
      <div className="flex flex-col gap-2 border border-gray-100 p-2">
        <div className="">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>

        <div className="flex justify-end items-center group w-full">
          <Badge
            variant="secondary"
            className="bg-blue-200"
          >
            Details
          </Badge>

          <div className="absolute hidden group-hover:flex flex-col border border-gray-400 text-gray-700 p-2 z-10 w-full sm:w-3/6 gap-1 -translate-y-16 translate-x-0 sm:translate-x-11 rounded-lg bg-gray-50">
            <p className="text-lg font-semibold text-gray-700">Stack I used:</p>
            <div className="flex flex-wrap gap-1">
              {badges.map((badge, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className={`${badge.bgClass} ${badge.borderClass} text-white`}
                >
                  {badge.text}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-1 px-2 mt-1">
              <Info className="h-4 w-4" />
              <p className="text-gray-500">
                The source code is confidential, sorry 😅
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

// import Image from "next/image";
// import { Card } from "./ui/card";
// import { Badge } from "./ui/badge";
// import { Info } from "lucide-react";

// interface BadgeProps {
//   text: string;
//   bgClass: string;
//   borderClass: string;
// }

// interface CardVeepeeProjectProps {
//   id: string;
//   href: string;
//   src: any;
//   alt: string;
//   title: string;
//   description: string;
//   badges: BadgeProps[];
// }

// export default function CardVeepeeProject({
//   id,
//   src,
//   title,
//   description,
//   badges,
// }: CardVeepeeProjectProps) {
//   return (
//     <Card
//       id={id}
//       className="relative border pb-2 pr-2 rounded-lg border-gray-300 bg-gray-100"
//     >
//       <div className="flex flex-col sm:flex-row gap-2 items-start">
//         <Image src={src} alt="Icon Image" width={80} height={80} className="w-20 h-20" />
//         <div className="break-words px-2 flex-1">
//           <h3 className="mb-2 text-xl font-semibold">{title}</h3>
//           <p className="text-gray-500">{description}</p>
//         </div>

//         <div className="flex justify-end sm:justify-between items-center group w-full sm:w-16 mt-4 sm:mt-0">
//           <Badge
//             variant="secondary"
//             className="border border-blue-50 bg-blue-100 hover:bg-blue-200 hover:border-blue-300 ml-0 sm:ml-auto relative z-10"
//           >
//             Details
//           </Badge>

//           <div className="absolute hidden group-hover:flex flex-col border border-gray-400 text-gray-700 p-2 z-10 w-full sm:w-3/6 gap-1 -translate-y-16 translate-x-0 sm:translate-x-11 rounded-lg bg-gray-200">
//             <p className="text-lg font-semibold text-gray-700">Stack I used:</p>
//             <div className="flex flex-wrap gap-1">
//               {badges.map((badge, index) => (
//                 <Badge
//                   key={index}
//                   variant="secondary"
//                   className={`${badge.bgClass} ${badge.borderClass} text-white`}
//                 >
//                   {badge.text}
//                 </Badge>
//               ))}
//             </div>
//             <div className="flex items-center gap-1 px-2 mt-1">
//               <Info className="h-4 w-4" />
//               <p className="text-gray-500">
//                 The source code is confidential, sorry 😅
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// }
