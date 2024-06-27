import Component from "./component";
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

    // TODO: LINKEDIN + GITHUB SHOULD HAVE SAME SYLE OF GMAIL (SPACEMENT AND ALIGMENT)
    //TODO: split component
  return (
    <div className="border border-black flex align-middle justify-betweenpy-2">
      <a
        className="border bg-green-500"
        href="https://www.linkedin.com/in/killian-seyo/"
      >
        {" "}
        <Label>Linkedin</Label>
      </a>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="border bg-green-400 h-8">Gmail</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
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
      <a className="border bg-red-500" href="https://github.com/guelate">
        <Label>Github</Label>
      </a>
    </div>
  );
}
