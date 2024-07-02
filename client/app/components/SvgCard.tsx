export default function SvgCard({ children }: any) {
  return (
    <div className="flex flex-col items-center justify-center p-4 m-2 bg-white rounded shadow border">
      {children}
      <p className="text-center mt-2">PostgreSQL</p>
    </div>
  );
}


