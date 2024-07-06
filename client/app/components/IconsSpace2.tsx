import ImageMoving from "./ImageMoving";

interface IconsSpaceProps2 {
  src1: string;
  src2: string;
}

export default function IconsSpace2({ src1, src2 }: IconsSpaceProps2) {
  return (
    <div className="w-full h-28 px-36 py-4 relative flex flex-col justify-between">
      <ImageMoving src={src1} translate="icon-move1" />
      <ImageMoving src={src2} translate="icon-move2" />
    </div>
  );
}


