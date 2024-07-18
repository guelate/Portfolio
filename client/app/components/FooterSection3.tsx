interface FooterSectionProps {
  title: string;
  children: any;
}

export default function FooterSection3({
  title,
  children,
}: FooterSectionProps) {
  return (
    <div className="">
      <h4 className="">{title}</h4>
      {children}
    </div>
  );
}


// interface FooterSectionProps {
//   title: string;
//   children: any;
// }

// export default function FooterSection3({
//   title,
//   children,
// }: FooterSectionProps) {
//   return (
//     <div className=" w-1/4 h-48 text-center py-2 flex flex-col gap-10 items-center">
//       <h4 className="text-lg font-semibold mb-4">{title}</h4>
//       {children}
//     </div>
//   );
// }
