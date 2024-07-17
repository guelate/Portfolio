import Image from "next/image";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface CardVeepeeProjectProps {
  id: string;
  href: string;
  src: any;
  alt: string;
  title: string;
  description: string;
}
export default function CardVeepeeProject({
  id,
  href,
  src,
  title,
  description,
}: CardVeepeeProjectProps) {
  return (
    <Card id={id} className="border rounded-lg border-gray-300 bg-gray-100">
      <div className="border border-green-300 flex gap-1 items-start">
        <Image src={src} alt="Icon Image" width={80} height={80} />
        <div className="border border-red-400 break-words p-2">
          <h3 className="">{title}</h3>
          <p className="t">{description}</p>
        </div>
      </div>

      <div className="group border border-black w-1/6 mx-48">
        <Badge
          variant="secondary"
          className="border border-blue-50 bg-blue-100 hover:bg-blue-200 hover:border-blue-300"
        >
          Details
        </Badge>
        <p className="hidden group-hover:block text-gray-900">ckmwcm</p>
      </div>
    </Card>
  );
}

// <Card id={id} className="border rounded-lg border-gray-300 bg-gray-100">

// <div className="flex items-center gap-5">
//   <a href={href} className="flex items-start gap-5">
//     <Image src={src} alt="Icon Image" width={80} height={80} />
//     <div className="flex flex-col mt-1">
//       <h3 className="text-xl font-semibold">{title}</h3>
//       <p className="text-gray-500">{description}</p>
//     </div>
//   </a>

//   <div className="group border border-black">
//     <Badge
//       variant="secondary"
//       className="border border-blue-50 bg-blue-100 hover:bg-blue-200 hover:border-blue-300"
//     >
//       Details
//     </Badge>
//     <p className="hidden group-hover:block text-gray-900">ckmwcm</p>
//   </div>
// </div>
// </Card>
