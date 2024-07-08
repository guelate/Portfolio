import CardVeepeeProject from "./CardVeepeeProject";
import Moderation from "../../public/Moderation.jpg";
import VeepeeFinder from "../../public/VeepeeFinder.jpg";
import UpList from "../../public/Uplist.png";
import IconsSpace4 from "./IconSpace4";

export default function VeepeeExperiment() {
  return (
    <div>
      <div className="flex justify-center mt-20">
        <IconsSpace4
          src1="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/IconK8s.png"
          src2="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconPrisma.png"
          // src3="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconJavascript.png"
        />
        <div className="block px-4 py-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4 sm:text-4xl md:text-5xl text-blue-300 hover:text-blue-400">
            My Veepee experience
          </h2>
          <p className="leading-relaxed text-lg mx-auto md:max-w-2xl text-gray-600">
            As a web developer, I&apos;m constantly exploring new technologies
            and techniques to push the boundaries of what&apos;s possible on the
            web. At Veepe, I&apos;ve had the opportunity to experiment with a
            wide range of tools and frameworks, from cutting-edge JavaScript
            libraries to innovative design systems.
          </p>
        </div>
        <IconsSpace4
          src1="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconJavascript.png"
          src2="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/IconNextJS.png"
          // src3="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconJavascript.png"
        />
      </div>

      <div className="space-y-6 w-2/4 mx-auto mt-20">
        <CardVeepeeProject
          href="/moderation"
          src={Moderation}
          alt="Project 1"
          title="Moderation"
          description="This project provides an automated solution for moderating sales content."
        />
        <CardVeepeeProject
          href="/moderation"
          src={VeepeeFinder}
          alt="Project 2"
          title="VeepeeFinder"
          description="This web extension that recommends you products while you browse certain e-commerce websites."
        />
        <CardVeepeeProject
          href="/moderation"
          src={UpList}
          alt="Project 3"
          title="UpList"
          description="This project is a platform where users submit ideas, and only selected ones are developed into projects."
        />
      </div>
    </div>
  );
}
