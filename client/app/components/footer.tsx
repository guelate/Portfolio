import Download from "./iconSvg/Download";
import FooterSection1 from "./FooterSection1";
import FooterSection2 from "./FooterSection2";
import FooterSection3 from "./FooterSection3";
import HomeButtonFooter from "./HomeButtonFooter";

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
        href1="#Moderation"
        href2="#VeepeeFinder"
        href3="#UpList"
        children1="Moderation"
        children2="Veepee Finder"
        children3="UpList"
      />
      <FooterSection2
        title="Some Projects"
        href1="#SionService"
        href2="#Envoiture"
        href3="#Metro"
        children1="SionService"
        children2="En voiture"
        children3="Métro"
      />

      <FooterSection3 title="Home">
        <HomeButtonFooter value="Download CV">
          <Download />
        </HomeButtonFooter>
      </FooterSection3>
    </footer>
  );
}

