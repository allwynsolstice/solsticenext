import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 navglass">
      <div className="container-max flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3 font-bold tracking-wide">
          <span>Solstice Luxe Travel</span>
        </Link>
        <nav className="hidden md:flex gap-5 text-[15px] text-[color:var(--muted,#b7b9c7)]">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link href="/contact" className="inline-block px-4 py-2 rounded-2xl font-semibold text-black" style={{background:'linear-gradient(135deg,#ffd27b,#ffc36b)'}}>
          Start Your Trip
        </Link>
      </div>
    </header>
  );
}
