import { Card } from "@/components/ui/card";
import { JSX, SVGProps } from "react";
import SvgCard from "./SvgCard";
import Postgres from "./iconSvg/Postgres";
import NextJS from "./iconSvg/NextJS";
import TypeScript from "./iconSvg/Typescript";
import Tailwind from "./iconSvg/TaiwlindCss";
import Prisma from "./iconSvg/Prisma";
import Shadcn from "./iconSvg/ShadcnSvg";

export default function DailyStack() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-muted border border-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Stack I use on a daily
            </h2>
          </div>
        </div>


          <div className="container mx-auto px-4 py-12 border border-black">
            <div className="flex flex-wrap justify-center">
              <SvgCard>
                <NextJS />
              </SvgCard>
              <SvgCard>
                <TypeScript />
              </SvgCard>
              <SvgCard>
                <Tailwind />
              </SvgCard>
              <div className="flex justify-center w-full">
                <SvgCard>
                  <Postgres />
                </SvgCard>
                <SvgCard>
                  <Prisma />
                </SvgCard>
                <SvgCard>
                  <Shadcn />
                </SvgCard>
              </div>
            </div>
          </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
          <Card className="flex flex-col items-center justify-center space-y-4">
            <div className="bg-primary rounded-md p-4 flex items-center justify-center">
              <CodepenIcon className="w-12 h-12 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Next.js</h3>
          </Card>
          <Card className="flex flex-col items-center justify-center space-y-4">
            <div className="bg-primary rounded-md p-4 flex items-center justify-center">
              <TypeIcon className="w-12 h-12 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">TypeScript</h3>
          </Card>
          <Card className="flex flex-col items-center justify-center space-y-4">
            <div className="bg-primary rounded-md p-4 flex items-center justify-center">
              <WindIcon className="w-12 h-12 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Tailwind CSS</h3>
          </Card>
        </div> */}
      </div>
    </div>
  );
}
