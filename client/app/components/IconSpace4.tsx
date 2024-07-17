// import ImageMoving from "./ImageMoving";

// interface IconsSpaceProps1 {
//   src1: string;
//   src2: string;

// }
// export default function IconsSpace4({ src1, src2 }: IconsSpaceProps1) {
//   return (
//     <div className="w-1/4 px-4">
//       <ImageMoving src={src1} translate="icon-moveX3" />
//       <ImageMoving src={src2} translate="icon-moveX4" />
//     </div>
//   );
// }

import ImageMoving from "./ImageMoving";

interface IconsSpaceProps1 {
  src1: string;
  src2: string;
}

export default function IconsSpace4({ src1, src2 }: IconsSpaceProps1) {
  return (
    <div className="w-full sm:w-1/4 px-4">
      <ImageMoving src={src1} translate="icon-moveX3" />
      <ImageMoving src={src2} translate="icon-moveX4" />
    </div>
  );
}