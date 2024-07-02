import Image from "next/image";

interface CardVeepeeProjectProps {
  href: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}
export default function CardVeepeeProject({
  href,
  src,
  alt,
  title,
  description,
}: CardVeepeeProjectProps) {
  return (
    <a className="block rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
      <Image
        src={src}
        width={500}
        height={400}
        alt={alt}
        className="object-cover w-full"
      />
      <div className="p-4 bg-gradient-to-t from-background to-transparent">
        <h3 className="text-xl font-bold text-primary-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-2 text-gray-500">{description}</p>
      </div>
    </a>
  );
}
