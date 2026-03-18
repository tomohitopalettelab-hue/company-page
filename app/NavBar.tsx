"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  if (pathname.startsWith("/admin")) return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-[300] px-6 py-4 md:px-10 bg-white/70 backdrop-blur-2xl border-b border-white/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="active:scale-95 transition-transform">
          <Image src="/palette-lab-logo.png" alt="Palette Lab" width={160} height={48} priority className="h-9 md:h-10 w-auto" />
        </Link>
        <div className="flex items-center gap-4 md:gap-10">
          <details
            className="relative lg:hidden"
            open={menuOpen}
            onToggle={(event) => setMenuOpen((event.currentTarget as HTMLDetailsElement).open)}
          >
            <summary
              className="list-none cursor-pointer p-2 rounded-xl bg-white/80 border border-slate-200 text-slate-700 hover:text-blue-600 transition-colors"
              aria-expanded={menuOpen}
            >
              <Menu size={20} />
            </summary>
            <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-slate-100 bg-white/95 backdrop-blur-xl shadow-xl p-2">
              <Link
                href="/news"
                className="block px-4 py-2.5 rounded-xl text-xs font-black tracking-widest text-slate-500 uppercase hover:bg-slate-50 hover:text-blue-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                News
              </Link>
              <Link
                href="/works"
                className="block px-4 py-2.5 rounded-xl text-xs font-black tracking-widest text-slate-500 uppercase hover:bg-slate-50 hover:text-blue-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Works
              </Link>
              <Link
                href="/solution"
                className="block px-4 py-2.5 rounded-xl text-xs font-black tracking-widest text-slate-500 uppercase hover:bg-slate-50 hover:text-blue-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2.5 rounded-xl text-xs font-black tracking-widest text-slate-500 uppercase hover:bg-slate-50 hover:text-blue-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2.5 rounded-xl text-xs font-black tracking-widest text-slate-500 uppercase hover:bg-slate-50 hover:text-blue-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="mt-2 border-t border-slate-100 pt-2">
                <Link
                  href="/diagnosis"
                  className="block px-4 py-3 rounded-xl bg-gradient-to-r from-[#00B7CE] via-[#2DD4BF] to-[#38BDF8] text-white text-xs font-black tracking-widest uppercase text-center shadow-lg shadow-cyan-200/70 hover:brightness-110 transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  無料診断
                </Link>
              </div>
            </div>
          </details>
          <div className="hidden lg:flex gap-10 text-xs font-black tracking-widest text-slate-400 uppercase">
            <Link href="/news" className="hover:text-blue-600 transition-colors">News</Link>
            <Link href="/works" className="hover:text-blue-600 transition-colors">Works</Link>
            <Link href="/solution" className="hover:text-blue-600 transition-colors">Solutions</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/diagnosis" className="relative px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#00B7CE] via-[#2DD4BF] to-[#38BDF8] text-white text-xs font-black tracking-tighter shadow-lg shadow-cyan-200/70 hover:brightness-110 transition-all">
              無料診断
            </Link>
            <Link href="/contact" className="px-6 py-2.5 rounded-2xl bg-slate-900 text-white text-xs font-black tracking-tighter hover:bg-blue-600 transition-all">
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
