import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "./ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"

export default function Component() {
  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant="outline">Contact Us</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Get in Touch</DialogTitle>
          <DialogDescription>Fill out the form below to send us a message.</DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" required />
          </div>
        </form>
        <DialogFooter>
          <Button type="submit">Send Message</Button>
          <div>
            <Button variant="outline">Cancel</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}