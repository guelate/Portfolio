import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Download } from "lucide-react";

interface FooterSectionProps {
  title: string;
  href1: string;
  href2: any;
  href3: string;
  children1: any;
  children2: any;
  children3: any;
}

export default function FooterSection2({
  title,
  href1,
  href2,
  href3,
  children1,
  children2,
  children3,
}: FooterSectionProps) {
  return (
    <div className="border border-black w-1/4 h-48 text-center py-2">
      <h4 className="text-lg font-semibold mb-4 inline-block">{title}</h4>
      <Button>
    <div className="flex border border-black px-2 py-2 rounded .rounded-lg justify-between w-36 text-center align-middle">
      <Download />
      <p>Download CV</p>
    </div>
  </Button>
      
    </div>
    // <div className="border border-black w-1/4 h-48 text-center">

    /* <h4 className="text-lg font-semibold">{title}</h4>
            <Link  
            className="hover:underline hover:underline-offset-4"
            href={href}
            prefetch={false}>
            {children}
            </Link>
            <Link  
            className="hover:underline hover:underline-offset-4"
            href={href}
            prefetch={false}>
            {children}
            </Link>
            <Link  
            className="hover:underline hover:underline-offset-4"
            href={href}
            prefetch={false}>
            {children}
            </Link> */

    // </div>
  );
}
