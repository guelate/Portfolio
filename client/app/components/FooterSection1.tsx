import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
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
    <div className="">
      <h4 className="">{title}</h4>
      <Link
        href={href1}
        prefetch={false}
        className=""
      >
        <p className="">{children1}</p>
      </Link>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="">
            Gmail
          </Button>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when yo done.
            </DialogDescription>
          </DialogHeader>

          <div className="">
            <div className="">
              <Label htmlFor="name" className="">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className=""
              />
            </div>
            <div className="">
              <Label htmlFor="username" className="">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className=""
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Link
        href={href3}
        prefetch={false}
        className=""
      >
        <p className="text-gray-600">{children3}</p>
      </Link>
    </div>
  );
}



// import Link from "next/link";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "./ui/dialog";
// import { Button } from "./ui/button";
// import { Label } from "./ui/label";
// import { Input } from "./ui/input";

// interface FooterSectionProps {
//   title: string;
//   href1: string;
//   href2: any;
//   href3: string;
//   children1: any;
//   children2: any;
//   children3: any;
// }

// export default function FooterSection1({
//   title,
//   href1,
//   href2,
//   href3,
//   children1,
//   children2,
//   children3,
// }: FooterSectionProps) {
//   return (
//     <div className="w-1/4 h-48 text-center py-2">
//       <h4 className="text-lg font-semibold mb-4 inline-block">{title}</h4>
//       <Link
//         href={href1}
//         prefetch={false}
//         className="block hover:underline hover:underline-offset-4 py-1"
//       >
//         <p className="text-gray-600">{children1}</p>
//       </Link>
//       <Dialog>
//         <DialogTrigger asChild>
//           <Button className="hover:underline hover:underline-offset-4 py-1 text-gray-600">
//             Gmail
//           </Button>
//         </DialogTrigger>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle>Edit profile</DialogTitle>
//             <DialogDescription>
//               Make changes to your profile here. Click save when yo done.
//             </DialogDescription>
//           </DialogHeader>

//           <div className="grid gap-4 py-4">
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="name" className="text-right">
//                 Name
//               </Label>
//               <Input
//                 id="name"
//                 defaultValue="Pedro Duarte"
//                 className="col-span-3"
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="username" className="text-right">
//                 Username
//               </Label>
//               <Input
//                 id="username"
//                 defaultValue="@peduarte"
//                 className="col-span-3"
//               />
//             </div>
//           </div>
//           <DialogFooter>
//             <Button type="submit">Save changes</Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>

//       <Link
//         href={href3}
//         prefetch={false}
//         className="block hover:underline hover:underline-offset-4 py-1"
//       >
//         <p className="text-gray-600">{children3}</p>
//       </Link>
//     </div>
//   );
// }
