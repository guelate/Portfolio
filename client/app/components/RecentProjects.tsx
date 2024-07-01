
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

//TODO: REPLACE START WITH SIGN FOR DONE OR WIP 
export default function RecentProjects() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-20">
      <div className="space-y-8 md:space-y-12">
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">My Freelance Mission</h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-[800px]">
            As a freelance web developer, my mission is to create beautiful, functional websites and web applications
            that help businesses and individuals achieve their online goals. I'm passionate about crafting intuitive
            user experiences, writing clean and efficient code, and staying up-to-date with the latest web technologies.
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Recent Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-muted rounded-lg overflow-hidden">
              <CardHeader>
                <Image
                  src="/placeholder.svg"
                  width={400}
                  height={225}
                  alt="Project 1"
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold mb-2">Project 1</h3>
                <p className="text-muted-foreground">
                  A modern e-commerce website built with React, Next.js, and Tailwind CSS.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Button variant="link">View Project</Button>
                <div className="flex items-center gap-2">
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-muted-foreground">4.8</span>
                </div>
              </CardFooter>
            </Card>
            <Card className="bg-muted rounded-lg overflow-hidden">
              <CardHeader>
                <Image
                  src="/placeholder.svg"
                  width={400}
                  height={225}
                  alt="Project 2"
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold mb-2">Project 2</h3>
                <p className="text-muted-foreground">
                  A responsive landing page for a SaaS product, designed with a focus on conversion.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Button variant="link">View Project</Button>
                <div className="flex items-center gap-2">
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-muted-foreground">4.6</span>
                </div>
              </CardFooter>
            </Card>
            <Card className="bg-muted rounded-lg overflow-hidden">
              <CardHeader>
                <Image
                  src="/placeholder.svg"
                  width={400}
                  height={225}
                  alt="Project 3"
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold mb-2">Project 3</h3>
                <p className="text-muted-foreground">
                  A custom WordPress theme for a local business, featuring a modern design and easy-to-use CMS.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Button variant="link">View Project</Button>
                <div className="flex items-center gap-2">
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-muted-foreground">4.9</span>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}