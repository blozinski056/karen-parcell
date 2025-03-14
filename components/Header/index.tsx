"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div>
        <div>
          <div>Karen Parcell</div>
          <div>Homes</div>
        </div>
        <nav>
          <ul>
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              HOME
            </Link>
            <Link
              href="/testimonials"
              className={pathname === "/testimonials" ? "active" : ""}
            >
              TESTIMONIALS
            </Link>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "active" : ""}
            >
              CONTACT
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
