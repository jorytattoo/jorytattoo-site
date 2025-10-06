import './globals.css'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Jory Henry — Realism & Surrealism Tattoos',
  description: 'Booking, portfolio, available designs, aftercare, and Official Collector merch.'
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="header-inner container">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.jpeg" alt="Jorytattoo" width={36} height={36}/>
              <span className="font-semibold tracking-wide" style={{marginLeft:8}}>Jorytattoo</span>
            </Link>
            <nav className="nav text-sm">
              <Link href="/about">About</Link>
              <Link href="/available-designs">Available Designs</Link>
              <Link href="/aftercare">Aftercare</Link>
              <Link href="/policies">Policies</Link>
              <Link href="/book" className="btn btn-primary">Book</Link>
              <a href="https://www.instagram.com/jorytattoo/" target="_blank">Instagram</a>
              <Link href="/merch">Official Collector</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="footer-inner container text-sm">
            <span>© {new Date().getFullYear()} Jory Henry.</span>
            <div className="flex items-center" style={{gap:14}}>
              <a href="https://www.instagram.com/jorytattoo/" target="_blank">Follow @jorytattoo</a>
              <Link className="btn" href="/book">Contact / Book</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}