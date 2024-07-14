import Link from "next/link";

interface SvgCardProps {
  children: any;
  text: string;
  href: string;
}

export default function SvgCard({ children, text, href }: SvgCardProps) {
  return (
    <div className="flex flex-col items-center w-32 p-4 m-2.5 bg-gray-200 rounded border border-gray-400 hover:bg-gray-300 hover:-translate-y-2 duration-300 ease-in-out cursor-pointer">
      <Link href={href}>
        <div>{children}</div>
        <p className="text-center"> {text}</p>
      </Link>
    </div>
  );
}
