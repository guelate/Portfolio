import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function VeepeeExperiment() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid max-w-5xl items-center justify-center gap-8 px-4 md:gap-12 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Web Development Experiments
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              As a web developer, I&apos;m constantly exploring new technologies and
              techniques to push the boundaries of what&apos;s possible on the web.
              At Veepe, I&apos;ve had the opportunity to experiment with a wide range
              of tools and frameworks, from cutting-edge JavaScript libraries to
              innovative design systems.
            </p>
          </div>

          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="#"
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2"
              prefetch={false}
            >
              <Image
                src="/placeholder.svg"
                width={500}
                height={400}
                alt="Project 1"
                className="object-cover w-full h-64"
              />
              <div className="absolute inset-0 z-10 flex items-end bg-gradient-to-t from-background to-transparent p-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-primary-foreground">
                    Project 1
                  </h3>
                  <p className="text-sm text-muted-foreground text-gray-500">
                    Explore my latest web development experiment.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href="#"
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2"
              prefetch={false}
            >
              <Image
                src="/placeholder.svg"
                width={500}
                height={400}
                alt="Project 2"
                className="object-cover w-full h-64"
              />
              <div className="absolute inset-0 z-10 flex items-end bg-gradient-to-t from-background to-transparent p-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-primary-foreground">
                    Project 2
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Explore my latest web development experiment.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href="#"
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2"
              prefetch={false}
            >
              <Image
                src="/placeholder.svg"
                width={500}
                height={400}
                alt="Project 3"
                className="object-cover w-full h-64"
              />
              <div className="absolute inset-0 z-10 flex items-end bg-gradient-to-t from-background to-transparent p-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-primary-foreground">
                    Project 3
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Explore my latest web development experiment.
                  </p>
                </div>
              </div>
            </Link>
          </div>


        {/* second card style */}

          {/* <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
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
          </div> */}
        </div>
      </section>
    </div>
  );
}
