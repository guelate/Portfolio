import Image from "next/image";

interface ImageProps {
  src: string;
  translateX: string;
}

export default function ImageMoving({ src, translateX }: ImageProps) {
  return (
    <div className={`border border-black w-8 ${translateX}`}>
      <Image src={src} alt="Icon Image" width={30} height={30} />
    </div>
  );
}

// "
