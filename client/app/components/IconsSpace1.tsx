import ImageMoving from "./ImageMoving";

interface IconsSpaceProps1 {
  src1: string;
  src2: string;
  src3: string;
}
export default function IconsSpace({ src1, src2, src3 }: IconsSpaceProps1) {
  return (
    <div className="w-1/4 px-4 border border-black">
      <ImageMoving src={src1} translateX="icon-move" />
      <ImageMoving src={src2} translateX="" />
      <ImageMoving src={src3} translateX="" />
    </div>
  );
}
