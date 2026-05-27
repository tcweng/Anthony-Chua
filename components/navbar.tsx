"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, Calendar, Menu, X } from "lucide-react"

const homeLinks = [
  { label: "Properties",    href: "#properties" },
  { label: "Team",          href: "#team" },
  { label: "About Anthony", href: "#about" },
]

const projectLinks = [
  { label: "Location",   href: "#location" },
  { label: "Facilities", href: "#facilities" },
  { label: "Layout",     href: "#layout" },
  { label: "Gallery",    href: "#gallery" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isProject = pathname.startsWith("/project/")
  const links = isProject ? projectLinks : homeLinks
  const ctaLabel = isProject ? "Make an Appointment" : "View Property"
  const ctaHref  = isProject ? "#location" : "#properties"
  const CtaIcon  = isProject ? Calendar : Home

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo + desktop links */}
          <div className="flex flex-row gap-12">
            <Link href="/" className="text-xl font-bold tracking-tight uppercase">
              Anthony Chua
            </Link>
            <div className="hidden items-center gap-8 md:flex">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <a
            href={ctaHref}
            className="hidden items-center gap-2 border border-gray-300 px-5 py-2 text-sm font-medium transition-colors hover:bg-gray-50 md:flex"
          >
            <CtaIcon size={16} />
            {ctaLabel}
          </a>

          {/* Mobile hamburger */}
          <button
            className="flex items-center justify-center md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sliding drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <span className="text-sm font-bold uppercase tracking-tight">
            Anthony Chua
          </span>
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col px-6 pt-6">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-gray-100 py-4 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div className="px-6 pt-6">
          <a
            href={ctaHref}
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center gap-2 bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            <CtaIcon size={16} />
            {ctaLabel}
          </a>
        </div>
      </div>
    </>
  )
}
