import SvgCard from "./SvgCard";
import Postgres from "./iconSvg/Postgres";
import NextJS from "./iconSvg/NextJS";
import TypeScript from "./iconSvg/Typescript";
import Tailwind from "./iconSvg/TaiwlindCss";
import Prisma from "./iconSvg/Prisma";
import Shadcn from "./iconSvg/ShadcnSvg";
import Image from "next/image";

export default function DailyStack() {
  return (
    <div className="md:py-24 lg:py-32">


      <div className="px-4 md:px-6 space-y-8 justify-center items-center text-center">
        <div className="text-center">
          <div className="space-y-2">
            <h2 id="CurrentStack" className="text-3xl font-bold tracking-tighter sm:text-5xl text-pink-400 hover:text-pink-500 text-center">
              Stack I use on a daily ⚡️
            </h2>
          </div>
        </div>

        <div className="mx-auto w-2/6 py-12 border rounded .rounded-lg bg-gray-50">
          <div className="flex flex-wrap justify-center">
            <SvgCard href="https://nextjs.org/" text="NextJS">
              <NextJS />
            </SvgCard>
            <SvgCard href="https://www.typescriptlang.org/" text="Typescript">
              <TypeScript />
            </SvgCard>

            <SvgCard href="https://tailwindcss.com/" text="Taiwlind CSS">
              <Tailwind />
            </SvgCard>
            <SvgCard href="https://www.postgresql.org/" text="PostgreSQL">
              <Postgres />
            </SvgCard>

            <SvgCard href="https://www.prisma.io/" text="Prisma">
              <Prisma />
            </SvgCard>

            <SvgCard href="https://ui.shadcn.com/" text="Shadcn/UI">
              <Shadcn />
            </SvgCard>
          </div>
        </div>
      </div>
    </div>
  );
}
