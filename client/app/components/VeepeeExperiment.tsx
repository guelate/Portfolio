import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import IconsSpace from "./IconsSpace1";
import IconsSpace1 from "./IconsSpace1";
import CardVeepeeProject from "./CardVeepeeProject";

export default function VeepeeExperiment() {
  return (
    // <div>
    //   <div className="flex">
    //     <IconsSpace1
    //       src1="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconDocker.png"
    //       src2="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/IconTypescript.png"
    //       src3="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconJavascript.png"
    //     />
    //     <div className="block border border-black px-4 py-4 text-center">
    //       <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
    //         My Web Development Experiments
    //       </h2>

    //       <p className="">
    //         As a web developer, I&apos;m constantly exploring new technologies
    //         and techniques to push the boundaries of what&apos;s possible on the
    //         web. At Veepe, I&apos;ve had the opportunity to experiment with a
    //         wide range of tools and frameworks, from cutting-edge JavaScript
    //         libraries to innovative design systems.
    //       </p>
    //     </div>
    //     <IconsSpace1
    //       src1="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconDocker.png"
    //       src2="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/IconTypescript.png"
    //       src3="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconJavascript.png"
    //     />
    //   </div>

    //   <div className="flex border border-black justify-center gap-8">
    //     <CardVeepeeProject
    //       href="#"
    //       src="/placeholder.svg"
    //       alt="Project 1"
    //       title="Project 1"
    //       description="Explore my latest web development experiment."
    //     />
    //     <CardVeepeeProject
    //       href="#"
    //       src="/placeholder.svg"
    //       alt="Project 1"
    //       title="Project 2"
    //       description="Explore my latest web development experiment."
    //     />
    //     <CardVeepeeProject
    //       href="#"
    //       src="/placeholder.svg"
    //       alt="Project 1"
    //       title="Project 3"
    //       description="Explore my latest web development experiment."
    //     />
    //   </div>
    // </div>

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
            As a web developer, I'm constantly exploring new technologies and
            techniques to push the boundaries of what's possible on the web. At
            Veepe, I've had the opportunity to experiment with a wide range of
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
      <div className="flex flex-wrap justify-center gap-8 px-4 pb-8">
        <CardVeepeeProject
          href="#"
          src="/placeholder.svg"
          alt="Project 1"
          title="Project 1"
          description="Explore my latest web development experiment."
          // className="w-full md:w-1/2 lg:w-1/3 px-2"
        />
        <CardVeepeeProject
          href="#"
          src="/placeholder.svg"
          alt="Project 2"
          title="Project 2"
          description="Explore my latest web development experiment."
          // className="w-full md:w-1/2 lg:w-1/3 px-2"
        />
        <CardVeepeeProject
          href="#"
          src="/placeholder.svg"
          alt="Project 3"
          title="Project 3"
          description="Explore my latest web development experiment."
          // className="w-full md:w-1/2 lg:w-1/3 px-2"
        />
      </div>
    </div>
  );
}

{
  /* second card style */
}

{
  /* <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Project</span>
              </Link>
              <Image
                src="/placeholder.svg"
                alt="Project 1"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">Dynamic Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                  A responsive and customizable dashboard for tracking key
                  metrics.
                </p>
                <Button variant="link" className="mt-2">
                  View Project
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Project</span>
              </Link>
              <Image
                src="/placeholder.svg"
                alt="Project 2"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">Interactive Map</h3>
                <p className="text-sm text-muted-foreground">
                  An interactive map with custom data visualizations.
                </p>
                <Button variant="link" className="mt-2">
                  View Project
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Project</span>
              </Link>
              <Image
                src="/placeholder.svg"
                alt="Project 3"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">AI-Powered Chatbot</h3>
                <p className="text-sm text-muted-foreground">
                  A conversational AI assistant for customer support.
                </p>
                <Button variant="link" className="mt-2">
                  View Project
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Project</span>
              </Link>
              <Image
                src="/placeholder.svg"
                alt="Project 4"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">E-commerce Platform</h3>
                <p className="text-sm text-muted-foreground">
                  A scalable and feature-rich e-commerce solution.
                </p>
                <Button variant="link" className="mt-2">
                  View Project
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Project</span>
              </Link>
              <Image
                src="/placeholder.svg"
                alt="Project 5"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">Data Visualization Suite</h3>
                <p className="text-sm text-muted-foreground">
                  A comprehensive data visualization platform.
                </p>
                <Button variant="link" className="mt-2">
                  View Project
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Project</span>
              </Link>
              <Image
                src="/placeholder.svg"
                alt="Project 6"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">Progressive Web App</h3>
                <p className="text-sm text-muted-foreground">
                  A fast and reliable web application with offline capabilities.
                </p>
                <Button variant="link" className="mt-2">
                  View Project
                </Button>
              </div>
            </div>
          </div> */
}
