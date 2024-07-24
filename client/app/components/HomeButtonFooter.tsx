import Link from "next/link";

export default function HomeButton({ children, value }: any) {
  return (
    <div className="flex flex-row bg-gray-200 hover:bg-gray-300 text-gray-800 border-gray-500 p-2 items-center  border rounded .rounded-lg text-sm font-medium ">
      <Link href="/KillianCv.pdf" download="KillianCv.pdf">
        {children}
        <p id="Home">{value}</p>
      </Link>
    </div>
  );
}

// import Link from "next/link";

// export default function HomeButton({ children, value }: any) {
//   return (
//     <Link
//       href="/KillianCv.pdf"
//       download="KillianCv.pdf"
//       className="flex items-center px-3 py-3 border rounded .rounded-lg text-sm font-medium bg-gray-200 hover:bg-gray-300 text-gray-800 border-gray-300 hover:-translate-y-1 duration-300"
//     >
//       {children}
//       <p id="Home">{value}</p>
//     </Link>
//   );
// }
