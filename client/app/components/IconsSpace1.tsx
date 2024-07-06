import ImageMoving from "./ImageMoving";

interface IconsSpaceProps1 {
  src1: string;
  src2: string;
}
export default function IconsSpace1({ src1, src2 }: IconsSpaceProps1) {
  return (
    <div className="w-1/4 px-4 border border-black">
      <ImageMoving src={src1} translate="icon-move1" />
      <ImageMoving src={src2} translate="icon-move2" />
    </div>
  );
}
