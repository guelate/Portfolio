import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function LabelLine() {
  return (
    <div className="">
      <a href="https://www.linkedin.com/in/killian-seyo/">
        <Button className="h-full sm:h-auto rounded-lg bg-blue-200 hover:bg-blue-300 text-blue-800 m-0 p-2">
          Linkedin
        </Button>
      </a>
      <a href="https://github.com/guelate">
        <Button className="h-full sm:h-auto rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 m-0 p-2">
          Github
        </Button>
      </a>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="h-full sm:h-auto rounded-lg bg-pink-200 hover:bg-pink-300 text-pink-800 m-0 p-2">
            Gmail
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you are done.
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
    </div>
  );
}


// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "./ui/dialog";
// import { Input } from "./ui/input";
// import { Label } from "./ui/label";

// export default function LabelLine() {
//   return (
//     <div className="flex gap-3 sm:flex-row justify-center items-center h-8 sm:h-auto w-full text-center space-y-2 sm:space-y-0 sm:space-x-2">
//       <a href="https://www.linkedin.com/in/killian-seyo/">
//         <Button className="h-full sm:h-auto rounded-lg bg-blue-200 hover:bg-blue-300 text-blue-800 m-0 p-2">
//           Linkedin
//         </Button>
//       </a>
//       <a href="https://github.com/guelate">
//         <Button className="h-full sm:h-auto rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 m-0 p-2">
//           Github
//         </Button>
//       </a>

//       <Dialog>
//         <DialogTrigger asChild>
//           <Button className="h-full sm:h-auto rounded-lg bg-pink-200 hover:bg-pink-300 text-pink-800 m-0 p-2">
//             Gmail
//           </Button>
//         </DialogTrigger>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle>Edit profile</DialogTitle>
//             <DialogDescription>
//               Make changes to your profile here. Click save when you are done.
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
//     </div>
//   );
// }