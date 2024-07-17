import Menu from "./Menu";
import HomeButton from "./HomeButton";

export default function HeaderLayout() {
  return (
    <div className="bg-gray-100 flex pl-48 pr-6 pt-5 justify-between">
      <HomeButton value="Home">
        <HomeIcon className="mr-2 h-4 w-4" />
      </HomeButton>
      <Menu />
    </div>
  );
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
