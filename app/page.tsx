import { Navbar } from "@/components/navbar"
import { FeaturedProperties } from "@/components/featured-properties"
import { StatsSection } from "@/components/stats-section"
import { Footer } from "@/components/footer"

import Image from "next/image"
import Hero from "@/assets/hero-02.png"
import Team from "@/assets/team.jpg"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] font-sans text-[#1a1a1a]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-white pt-16">
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-12 lg:flex-row">
          <div className="flex flex-col gap-6">
            <h1 className="max-w-3xl text-5xl font-medium md:text-6xl lg:text-7xl">
              Find a place you will call home
            </h1>
            <button className="hidden w-fit gap-2 border border-gray-300 bg-black px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-50 hover:text-black md:block">
              Book a call
            </button>
          </div>
          <p className="max-w-sm text-base">
            Discover premium real estate tailored to your lifestyle. We help you
            find your perfect home from our curated selection of properties
            worldwide.
          </p>
          <button className="w-fit gap-2 border border-gray-300 bg-black px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-50 hover:text-black md:hidden">
            Book a call
          </button>
        </div>
        <Image
          src={Hero}
          alt="Luxury home"
          className="-mt-16 h-120 w-full object-cover object-top lg:-mt-42 lg:h-170"
        />
      </section>

      <div id="properties">
        <FeaturedProperties />
      </div>

      <StatsSection />

      <section id="team" className="mx-auto max-w-7xl px-6 py-12 lg:py-24">
        <h2 className="mb-4 text-4xl font-medium">The Experts</h2>
        <p className="mb-8 max-w-xl text-sm text-gray-500">
          Meet the dedicated professionals behind Anthony Chua Real Estate. Each
          member brings deep market knowledge, a personalised approach, and a
          shared commitment to finding you the right property every time.
        </p>
        <Image
          src={Team}
          alt="Group photo of Anthony Chua's team member"
        ></Image>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex min-h-130 flex-col overflow-hidden bg-[#1a1a1a] md:h-160 md:flex-row">
          <div className="flex flex-1 items-center p-10 md:p-14">
            <div className="max-w-lg">
              <h2 className="text-4xl leading-tight font-semibold text-white">
                ANTHONY CHUA
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Anthony Chua began his real estate career with a single belief
                that every client deserves honest advice and exceptional
                results. Over the years, he grew from a solo agent into one of
                Malaysia&apos;s most recognised property leaders, assembling a
                team of 17 specialists and earning 20+ industry awards along the
                way. Today, his name stands for trust, market expertise, and a
                genuine passion for helping people find a place to call home.
              </p>
            </div>
          </div>
          <div className="h-120 overflow-hidden md:h-auto md:w-125">
            <video
              src="/video.mp4"
              controls
              loop
              className="h-full w-full object-cover object-center opacity-60"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
