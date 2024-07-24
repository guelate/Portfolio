import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import Image from "next/image";


interface CardRecentProjectProps {
    id: string;
    title: string;
    description: string;
  }

export default function CardVeepeeProject({
    id,
    title,
    description,
  }: CardRecentProjectProps) {
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
        </div>
  
        <div className="flex justify-end items-center group">
          <Badge
            variant="secondary"
            className="border border-blue-50 bg-blue-100 hover:bg-blue-200 hover:border-blue-300"
          >
            Details
          </Badge>
          <p className="absolute hidden group-hover:block text-gray-900">ckmwcm</p>
        </div>
      </Card>
    );
  }


//   import { Badge } from "./ui/badge";
// import { Card } from "./ui/card";
// import Image from "next/image";


// interface CardRecentProjectProps {
//     id: string;
//     title: string;
//     description: string;
//   }

// export default function CardVeepeeProject({
//     id,
//     title,
//     description,
//   }: CardRecentProjectProps) {
//     return (
//       <Card
//         id={id}
//         className="border pb-1 rounded-lg border-gray-300 bg-gray-100"
//       >
//         <div className=" flex gap-1 items-start">
//           <Image src={src} alt="Icon Image" width={80} height={80} />
//           <div className="break-words px-2">
//             <h3 className="mb-2 text-xl font-semibold">{title}</h3>
//             <p className="text-gray-500">{description}</p>
//           </div>
//         </div>
  
//         <div className="group w-1/6 mx-72">
//           <Badge
//             variant="secondary"
//             className="border border-blue-50 bg-blue-100 hover:bg-blue-200 hover:border-blue-300"
//           >
//             Details
//           </Badge>
//           <p className="hidden group-hover:block text-gray-900">ckmwcm</p>
//         </div>
//       </Card>
//     );
//   }