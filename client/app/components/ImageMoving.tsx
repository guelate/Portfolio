import Image from "next/image";

interface ImageProps {
  src: string;
  translate: string;
}

export default function ImageMoving({ src, translate }: ImageProps) {
  return (
    <div className={`w-8 abosule ${translate} `}>
      <Image src={src} alt="Icon Image" width={50} height={50} />
    </div>
  );
}
