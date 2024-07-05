import Image from "next/image";
import { Card } from "./ui/card";

interface CardVeepeeProjectProps {
  href: string;
  src: any;
  alt: string;
  title: string;
  description: string;
}
export default function CardVeepeeProject({
  href,
  src,
  title,
  description,
}: CardVeepeeProjectProps) {
  return (
    <Card className="border rounded .rounded-lg border-gray-300 bg-gray-100 hover:-translate-y-2 duration-300">
      <div className="flex items-center gap-5">
        <a href={href} className="flex items-start gap-5">
          <Image src={src} alt="Icon Image" width={80} height={80} />
          <div className="flex flex-col mt-1">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className=" text-gray-500">{description}</p>
          </div>
        </a>
      </div>
    </Card>
  );
}
