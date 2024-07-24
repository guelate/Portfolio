import ImageMoving from "./ImageMoving";

interface IconsSpaceProps1 {
  src1: string;
  src2: string;
}

export default function IconsSpace5({ src1, src2 }: IconsSpaceProps1) {
  return (
    <div className="w-full px-4 border border-black">
      <ImageMoving src={src1} translate="icon-moveX5" />
      <ImageMoving src={src2} translate="icon-moveX6" />
    </div>
  );
}
