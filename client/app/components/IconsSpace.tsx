import ImageMoving from "./ImageMoving";

interface IconsSpaceProps {
  src1: string;
  src2: string;
  src3: string;
  src4: string;
}
export default function IconsSpace({
  src1,
  src2,
  src3,
  src4,
}: IconsSpaceProps) {
  return (
    <div className="w-1/4 px-4">
      <ImageMoving src={src1} />
      <ImageMoving src={src2} />
      <ImageMoving src={src3} />
      <ImageMoving src={src4} />
    </div>
  );
}
