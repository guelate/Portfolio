
import { Card } from "@/components/ui/card"

export default function DailyStack() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Stack I use on a daily
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
          <Card className="flex flex-col items-center justify-center space-y-4">
            <div className="bg-primary rounded-md p-4 flex items-center justify-center">
              <CodepenIcon className="w-12 h-12 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Next.js</h3>
          </Card>
          <Card className="flex flex-col items-center justify-center space-y-4">
            <div className="bg-primary rounded-md p-4 flex items-center justify-center">
              <TypeIcon className="w-12 h-12 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">TypeScript</h3>
          </Card>
          <Card className="flex flex-col items-center justify-center space-y-4">
            <div className="bg-primary rounded-md p-4 flex items-center justify-center">
              <WindIcon className="w-12 h-12 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Tailwind CSS</h3>
          </Card>
        </div>
      </div>
    </section>
  )
}

function CodepenIcon(props) {
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
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function TypeIcon(props) {
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
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  )
}


function WindIcon(props) {
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
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  )
}