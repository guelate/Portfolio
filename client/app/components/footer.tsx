
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Company</h4>
          <p className="text-muted-foreground">Learn more about our mission and team.</p>
          <nav className="grid gap-2">
            <Link href="#" className="hover:underline hover:underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4" prefetch={false}>
              Careers
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4" prefetch={false}>
              Blog
            </Link>
          </nav>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Resources</h4>
          <p className="text-muted-foreground">Explore our documentation and guides.</p>
          <nav className="grid gap-2">
            <Link href="#" className="hover:underline hover:underline-offset-4" prefetch={false}>
              Documentation
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4" prefetch={false}>
              Guides
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4" prefetch={false}>
              API Reference
            </Link>
          </nav>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Contact</h4>
          <p className="text-muted-foreground">Get in touch with our team.</p>
          <nav className="grid gap-2">
            <Link href="#" className="hover:underline hover:underline-offset-4" prefetch={false}>
              Support
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4" prefetch={false}>
              Sales
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4" prefetch={false}>
              Partnerships
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}