import { House } from "lucide-react";
import Link from "next/link";

export default function HomeButton() {
  return (
    <Link href="#Home" className="flex border border-gray-300 items-center bg-gray-300 w-1/5 h-10  md:w-20 justify-between p-2 rounded .rounded-lg text-gray-800 hover:border-gray-500  md:hover:-translate-y-1 lg:hover:-translate-y-1 duration-300">
      <House size="20px"/>
      <p className="text-sm">Home</p>
    </Link>
  );
}

// import Link from "next/link";

// export default function HomeButton({ children, value }: any) {
//   return (
//     <Link
//       href="#Home"
//       className="flex items-center px-2 border rounded .rounded-lg text-sm font-medium bg-gray-200 hover:bg-gray-300 text-gray-800 border-gray-300 hover:-translate-y-1 duration-300 cache"
//     >
//       {children}
//       <p id="Home">{value}</p>
//     </Link>
//   );
// }
