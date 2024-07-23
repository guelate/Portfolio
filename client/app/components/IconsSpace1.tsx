import ImageMoving from "./ImageMoving";

interface IconsSpaceProps1 {
  src1: string;
  src2: string;
}
export default function IconsSpace1({ src1, src2 }: IconsSpaceProps1) {
  return (
    <div className="border border-black w-2/4">
      <ImageMoving src={src1} translate="icon-moveY1" />
      <ImageMoving src={src2} translate="icon-moveY2" />
    </div>
  );
}


// import ImageMoving from "./ImageMoving";

// interface IconsSpaceProps1 {
//   src1: string;
//   src2: string;
// }
// export default function IconsSpace1({ src1, src2 }: IconsSpaceProps1) {
//   return (
//     <div className="w-1/4 px-4">
//       <ImageMoving src={src1} translate="icon-moveY1" />
//       <ImageMoving src={src2} translate="icon-moveY2" />
//     </div>
//   );
// }
