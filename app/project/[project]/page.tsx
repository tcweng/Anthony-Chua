import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LayoutTabs } from "@/components/project/layout-tabs"
import { ContactForm } from "@/components/project/contact-form"
import {
  MapPin,
  Building2,
  Ruler,
  BadgeCheck,
  Landmark,
  ShieldCheck,
  TrendingUp,
} from "lucide-react"

// ─── Mock data (replace per project) ────────────────────────────────────────

const project = {
  name: "Pavilion Square",
  tagline: "In the Golden Triangle of Kuala Lumpur",
  location: "Bukit Bintang, Kuala Lumpur",
  priceFrom: "RM 800,000",
  sizeFrom: "550 sq ft",
  completion: "Q4 2027",
  heroImg:
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=90",
  mapImg:
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80",
}

const usps = [
  {
    icon: Landmark,
    title: "Iconic Address",
    description:
      "Situated in the heart of Bukit Bintang — KL's most prestigious and recognisable district, steps from Pavilion Mall.",
  },
  {
    icon: Building2,
    title: "Skyline Views",
    description:
      "Unobstructed panoramic views of the KLCC corridor, Petronas Twin Towers, and the wider KL city skyline.",
  },
  {
    icon: TrendingUp,
    title: "Strong Investment",
    description:
      "High rental demand, strong capital appreciation potential, and a proven track record in the Golden Triangle micro-market.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Developed by an award-winning developer with a portfolio of over 20 completed high-rise projects across Malaysia.",
  },
  {
    icon: Ruler,
    title: "Flexible Layouts",
    description:
      "Unit types ranging from 550 to 1,420 sq ft — designed to suit singles, couples, families, and investors alike.",
  },
  {
    icon: BadgeCheck,
    title: "Freehold Title",
    description:
      "Freehold land status offering permanent ownership rights, providing greater security and long-term value for buyers.",
  },
]

const facilities = [
  {
    label: "Infinity Pool",
    img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=700&q=80",
  },
  {
    label: "Sky Lounge",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700&q=80",
  },
  {
    label: "Gymnasium",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=80",
  },
  {
    label: "Co-Working Space",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
  },
  {
    label: "Landscaped Garden",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80",
  },
  {
    label: "Function Hall",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=700&q=80",
  },
]

const nearby = [
  {
    category: "Shopping",
    items: ["Pavilion KL", "Starhill Gallery", "Lot 10"],
  },
  {
    category: "Transport",
    items: [
      "Bukit Bintang MRT",
      "Raja Chulan Monorail",
      "KLIA Ekspres (30 min)",
    ],
  },
  {
    category: "Healthcare",
    items: ["Gleneagles Hospital", "Prince Court Medical", "KPJ Damansara"],
  },
  {
    category: "Education",
    items: [
      "International School of KL",
      "Nexus International",
      "ELC International",
    ],
  },
]

// ─── Page ───────────────────────────────────────────────────────────────────

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#1a1a1a]">
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative h-215 overflow-hidden pt-16 lg:h-190">
        {/* Background image */}
        <img
          src={project.heroImg}
          alt={project.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

        {/* Hero content */}
        <div className="relative flex min-h-screen flex-col justify-end pb-32">
          <div className="mx-auto w-full max-w-7xl px-6">
            <p className="mb-3 text-sm text-white/60">{project.tagline}</p>
            <h1 className="text-5xl font-semibold text-white md:text-7xl">
              {project.name}
            </h1>
          </div>
        </div>
      </section>

      {/* ── 2. MAP / LOCATION ───────────────────────────────────────────── */}
      <section id="location" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-2 text-4xl font-medium">Location</h2>
        <p className="mb-10 max-w-xl text-sm text-gray-500">
          Strategically positioned in Bukit Bintang — KL&apos;s Golden Triangle
          — with seamless access to transit, retail, healthcare, and
          international schools.
        </p>

        <div>
          {/* Map image */}
          <div className="overflow-hidden lg:col-span-2">
            <img
              src={project.mapImg}
              alt="Project location map"
              className="h-96 w-full object-cover lg:h-full"
            />
          </div>
        </div>
      </section>

      {/* ── 3. USP ──────────────────────────────────────────────────────── */}
      <section id="usp" className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
          {usps.map((usp) => {
            const Icon = usp.icon
            return (
              <div
                key={usp.title}
                className="flex flex-col gap-4 bg-white p-8 transition-colors hover:bg-gray-50"
              >
                <div className="flex h-10 w-10 items-center justify-center bg-[#F8F8F8]">
                  <Icon className="h-5 w-5 text-[#1a1a1a]" />
                </div>
                <div>
                  <h3 className="mb-1.5 font-semibold">{usp.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {usp.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── 4. FACILITIES ───────────────────────────────────────────────── */}
      {/* Gallery anchor — both #facilities and #gallery scroll here */}
      <div id="gallery" />
      <section id="facilities" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-2 text-4xl font-medium">Facilities</h2>
        <p className="mb-10 max-w-xl text-sm text-gray-500">
          Residents enjoy an extensive suite of lifestyle amenities curated for
          comfort, wellness, and productivity — all within the building.
        </p>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
          {facilities.map((f, i) => (
            <div
              key={f.label}
              className={`group relative overflow-hidden ${i === 0 ? "col-span-2 row-span-2 lg:col-span-1" : ""}`}
            >
              <img
                src={f.img}
                alt={f.label}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  i === 0 ? "h-72 lg:h-full" : "h-48"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm font-medium text-white">
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. LAYOUT TABS ──────────────────────────────────────────────── */}
      <section id="layout" className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="mb-2 text-4xl font-medium">Layout</h2>
        <p className="mb-10 max-w-xl text-sm text-gray-500">
          From compact suites to expansive family residences — every unit type
          is crafted to maximise space, light, and livability.
        </p>

        <LayoutTabs />
      </section>

      {/* ── CONTACT FORM ────────────────────────────────────────────────── */}
      <ContactForm projectName={project.name} />

      <Footer />
    </div>
  )
}
