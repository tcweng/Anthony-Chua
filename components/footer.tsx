import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="pb-8 text-xs">
          This website is managed by PropNex Malaysia, the authorised Sales &
          Marketing Representative for Pavilion Square, and does not constitute
          the developer's official source; all information is for reference only
          and may change. PropNex and its certified agents act as authorised
          representatives.
        </p>
        <div className="flex flex-col items-start gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/40">
            © 2026 Anthony Chua. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/terms"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
