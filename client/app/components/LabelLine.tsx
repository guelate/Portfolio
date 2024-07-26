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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Textarea } from "./ui/textarea";

export default function LabelLine() {
  return (
    <div className="flex gap-3 items-center justify-center rounded .rounded-lg">
      <a href="https://www.linkedin.com/in/killian-seyo/">
        <Button className="h-full sm:h-auto rounded .rounded-lg bg-blue-200 hover:bg-blue-300 text-blue-800 m-0 p-2 border border-blue-300">
          Linkedin
        </Button>
      </a>
      <a href="https://github.com/guelate">
        <Button className="h-full sm:h-auto rounded .rounded-lg bg-gray-200 hover:bg-gray-300 border border-gray-300 text-gray-800 m-0 p-2">
          Github
        </Button>
      </a>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            onClick={() => console.log("hello")}
            className="h-full sm:h-auto rounded .rounded-lg bg-pink-200 hover:bg-pink-300 text-pink-800 border border-pink-300 m-0 p-2"
          >
            Gmail
          </Button>
        </DialogTrigger>

        <DialogContent className="flex flex-col w-3/4 justify-center items-center bg-gray-50 rounded .rounded-lg">
          <DialogHeader>
            <DialogTitle>Contact Me</DialogTitle>
          </DialogHeader>
          <CardContent className="w-3/4">
            <div className="">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                required
                className="placeholder-gray-100"
              />
            </div>
            <div className="">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Objet" required />
            </div>
            <div className="">
              <Label htmlFor="body">Message</Label>
              <Textarea
                id="body"
                placeholder="Write your message here..."
                className="min-h-[150px]"
                required
              />
            </div>
          </CardContent>
          <DialogFooter className="border border-black rounded .rounded-lg">
            <Button
              type="submit"
              className="bg-blue-100 border border-blue-200 hover:bg-blue-300"
            >
              Send
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
{
  /* <DialogContent className="flex flex-col w-2/4 justify-center items-center bg-gray-50">
<DialogHeader>
  <DialogTitle>Contact Me</DialogTitle>
</DialogHeader>
<CardContent className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input
      id="email"
      type="email"
      placeholder="Email"
      required
      className="placeholder-gray-100"
    />
  </div>
  <div className="space-y-2">
    <Label htmlFor="subject">Subject</Label>
    <Input id="subject" placeholder="Objet" required />
  </div>
  <div className="space-y-2">
    <Label htmlFor="body">Message</Label>
    <Textarea
      id="body"
      placeholder="Write your message here..."
      className="min-h-[150px]"
      required
    />
  </div>
</CardContent>
<DialogFooter>
  <Button type="submit">Send</Button>
</DialogFooter>
</DialogContent> */
}
