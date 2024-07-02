import IconsSpace1 from "./IconsSpace1";
import CardVeepeeProject from "./CardVeepeeProject";

export default function VeepeeExperiment() {
  return (
    <div>
      <div className="flex justify-center mt-20">
        <IconsSpace1
          src1="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconDocker.png"
          src2="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/IconTypescript.png"
          src3="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconJavascript.png"
        />
        <div className="block px-4 py-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4 sm:text-4xl md:text-5xl">
            My Veepee experience
          </h2>
          <p className="leading-relaxed text-lg mx-auto md:max-w-2xl">
            As a web developer, I&apos;m constantly exploring new technologies and
            techniques to push the boundaries of what&apos;s possible on the web. At
            Veepe, I&apos;ve had the opportunity to experiment with a wide range of
            tools and frameworks, from cutting-edge JavaScript libraries to
            innovative design systems.
          </p>
        </div>
        <IconsSpace1
          src1="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconDocker.png"
          src2="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/IconTypescript.png"
          src3="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconJavascript.png"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4 py-8 pb-8 mt-10">
        <CardVeepeeProject
          href="#"
          src="/placeholder.svg"
          alt="Project 1"
          title="Project 1"
          description="Explore my latest web development experiment."
        />
        <CardVeepeeProject
          href="#"
          src="/placeholder.svg"
          alt="Project 2"
          title="Project 2"
          description="Explore my latest web development experiment."
        />
        <CardVeepeeProject
          href="#"
          src="/placeholder.svg"
          alt="Project 3"
          title="Project 3"
          description="Explore my latest web development experiment."
        />
      </div>
    </div>
  );
}
