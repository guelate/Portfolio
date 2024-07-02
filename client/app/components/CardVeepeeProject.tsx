import Image from 'next/image';
import Link from 'next/link';

export default function CardVeepeeProject ({ href, src, alt, title, description }){
  return (
    // <Link href={href} className="block" prefetch={false}>
      <a className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
        <Image
          src={src}
          width={500}
          height={400}
          alt={alt}
          className="object-cover w-full h-64 md:h-80"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background to-transparent p-4 transition-opacity duration-300 group-hover:opacity-95">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-primary-foreground">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </a>
    // </Link>
  );
};