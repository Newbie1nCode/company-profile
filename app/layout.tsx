// app/layout.tsx
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-[#F8FAFC]">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo & Brand */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A2540] to-[#2563EB] shadow-md">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z"
                    />
                  </svg>
                </div>

                <Link
                  href="/"
                  className="flex flex-col hover:opacity-90 transition-opacity"
                >
                  <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#0A2540] to-[#2563EB] bg-clip-text text-transparent">
                    NusaData Cloud
                  </span>
                  <span className="text-xs font-medium text-[#2563EB] -mt-1">
                    Trusted Cloud Infrastructure
                  </span>
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-1">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/profile">Profile</NavLink>
                <NavLink href="/service">Services</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </div>

              {/* Mobile Button (visual only) */}
              <button className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#0A2540] hover:text-[#2563EB] hover:bg-[#F0F9FF] transition">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              <MobileNavLink href="/">Home</MobileNavLink>
              <MobileNavLink href="/profile">Profile</MobileNavLink>
              <MobileNavLink href="/service">Services</MobileNavLink>
              <MobileNavLink href="/contact">Contact</MobileNavLink>
            </div>
          </div>
        </nav>

        {/* Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}

/* Desktop NavLink with battery-like underline hover effect */
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative px-5 py-2 font-medium text-[#0F172A] hover:text-[#2563EB] transition-colors group"
    >
      {children}
      {/* Animated gradient underline */}
      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0A2540] to-[#22D3EE] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
    </Link>
  );
}

/* Mobile NavLink (no hover effect needed for mobile) */
function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block px-4 py-3 rounded-lg font-medium text-[#0F172A] hover:text-[#2563EB] hover:bg-[#F0F9FF] transition"
    >
      {children}
    </Link>
  );
}