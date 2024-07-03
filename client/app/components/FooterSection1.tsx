import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface FooterSectionProps {
  title: string;
  href1: string;
  href2: any;
  href3: string;
  children1: any;
  children2: any;
  children3: any;
}

export default function FooterSection1({
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
      <Link
        href={href1}
        prefetch={false}
        className="block hover:underline hover:underline-offset-4 py-1"
      >
        {children1}
      </Link>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="hover:underline hover:underline-offset-4">
            Gmail
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when yo done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* <Link  
        href={href2}
        prefetch={false}
        className="block hover:underline hover:underline-offset-4 py-1">
  
          {children2}
    
      </Link> */}
      <Link
        href={href3}
        prefetch={false}
        className="block hover:underline hover:underline-offset-4 py-1"
      >
        {children3}
      </Link>
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
