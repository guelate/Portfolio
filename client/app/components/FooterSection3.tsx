import { Download } from "lucide-react";

interface FooterSectionProps {
  title: string;
  children: any;
}

export default function FooterSection3({ title,children }: FooterSectionProps) {
  return (
    <div className=" w-1/4 h-48 text-center py-2 flex flex-col gap-10 items-center">
      <h4 className="text-lg font-semibold mb-4">{title}</h4>
      {/* <div className="flex w-3/6 border border-gray-400 px-4 py-2 rounded .rounded-lg justify-between items-center text-center align-middle cursor-pointer bg-gray-200 hover:bg-gray-400 hover:-translate-y-2 duration-300">
        <Download className="text-gray-500" />
        <p>Download CV</p>
      </div> */}
      {children}
    </div>
  );
}
