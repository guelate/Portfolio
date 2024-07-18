import Link from "next/link";

interface FooterSectionProps {
  title: string;
  href1: string;
  href2: any;
  href3: string;
  children1: any;
  children2: any;
  children3: any;
}

export default function FooterSection2({
  title,
  href1,
  href2,
  href3,
  children1,
  children2,
  children3,
}: FooterSectionProps) {
  return (
    <div className="">
      <h4 className="">{title}</h4>
      <Link
        href={href1}
        className=""
      >
        <p className="">{children1}</p>
      </Link>
      <Link
        href={href2}
        className=""
      >
        <p className="text-gray-600">{children2}</p>
      </Link>

      <Link
        href={href3}
        className=""
      >
        <p className="text-gray-600">{children3}</p>
      </Link>
    </div>
  );
}


// import Link from "next/link";

// interface FooterSectionProps {
//   title: string;
//   href1: string;
//   href2: any;
//   href3: string;
//   children1: any;
//   children2: any;
//   children3: any;
// }

// export default function FooterSection2({
//   title,
//   href1,
//   href2,
//   href3,
//   children1,
//   children2,
//   children3,
// }: FooterSectionProps) {
//   return (
//     <div className="w-1/4 h-48 text-center py-2">
//       <h4 className="text-lg font-semibold mb-4 inline-block">{title}</h4>
//       <Link
//         href={href1}
//         className="block hover:underline hover:underline-offset-4 py-1"
//       >
//         <p className="text-gray-600">{children1}</p>
//       </Link>
//       <Link
//         href={href2}
//         className="block hover:underline hover:underline-offset-4 py-1"
//       >
//         <p className="text-gray-600">{children2}</p>
//       </Link>

//       <Link
//         href={href3}
//         className="block hover:underline hover:underline-offset-4 py-1"
//       >
//         <p className="text-gray-600">{children3}</p>
//       </Link>
//     </div>
//   );
// }
