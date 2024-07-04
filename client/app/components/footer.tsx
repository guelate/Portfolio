import { Button } from "@/components/ui/button";

import { Download } from "lucide-react";

import FooterSection1 from "./FooterSection1";
import FooterSection2 from "./FooterSection2";
import FooterSection3 from "./FooterSection3";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 px-20 flex justify-between">
      <FooterSection1
        title="Home"
        href1="https://www.linkedin.com/in/killian-seyo/"
        href2="https://www.linkedin.com/in/killian-seyo/"
        href3="https://github.com/guelate"
        children1="Linkedin"
        children2="Gmail"
        children3="Github"
      />
      <FooterSection2
        title="My Veepee Experience"
        href1="/Moderation"
        href2="/VeepeeFinder"
        href3="/UpList"
        children1="Moderation"
        children2="Veepee Finder"
        children3="UpList"
      />
      <FooterSection2
        title="Some Projects"
        href1="Envoiture"
        href2="Métro"
        href3="ScrapperTv"
        children1="Envoiture"
        children2="Métro"
        children3="Scrapper Tv"
      />
      <FooterSection3 title="Home">
        <Button>
          <Download />
          <p>Download CV</p>
        </Button>
      </FooterSection3>

    </footer>
  );
}

{
  /* <div className="container max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-8">
<div className="space-y-2">
  <h4 className="text-lg font-semibold">Home</h4>

  <Link
    className="hover:underline hover:underline-offset-4"
    href="https://www.linkedin.com/in/killian-seyo/"
    prefetch={false}
  >
    Linkedin
  </Link>
  <Link
    className="hover:underline hover:underline-offset-4"
    href="https://www.linkedin.com/in/killian-seyo/"
    prefetch={false}
  >
    Github
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
</div>
<div className="space-y-2">
  <h4 className="text-lg font-semibold">My Veepee Experience</h4>
  <p className="text-muted-foreground">
    Explore our documentation and guides.
  </p>
  <nav className="grid gap-2">
    <Link
      href="#"
      className="hover:underline hover:underline-offset-4"
      prefetch={false}
    >
      Documentation
    </Link>
    <Link
      href="#"
      className="hover:underline hover:underline-offset-4"
      prefetch={false}
    >
      Guides
    </Link>
    <Link
      href="#"
      className="hover:underline hover:underline-offset-4"
      prefetch={false}
    >
      API Reference
    </Link>
  </nav>
</div>
<div className="space-y-2">
  <h4 className="text-lg font-semibold">Some Projects</h4>
  <p className="text-muted-foreground">Get in touch with our team.</p>
  <nav className="grid gap-2">
    <Link
      href="#"
      className="hover:underline hover:underline-offset-4"
      prefetch={false}
    >
      Support
    </Link>
    <Link
      href="#"
      className="hover:underline hover:underline-offset-4"
      prefetch={false}
    >
      Sales
    </Link>
    <Link
      href="#"
      className="hover:underline hover:underline-offset-4"
      prefetch={false}
    >
      Partnerships
    </Link>
  </nav>
  <Button>
    <div className="flex border border-black px-2 py-2 rounded .rounded-lg justify-between w-36 text-center align-middle">
      <Download />
      <p>Download CV</p>
    </div>
  </Button>
</div>
</div> */
}
