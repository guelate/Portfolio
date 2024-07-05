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
