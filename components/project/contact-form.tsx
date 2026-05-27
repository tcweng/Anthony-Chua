"use client"

import { useState } from "react"

const unitTypes = ["Type A", "Type B1", "Type B2", "Type C", "Type D"]

export function ContactForm({ projectName }: { projectName: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    visitDate: "",
    unitType: "",
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: wire up to backend / CRM
    setSubmitted(true)
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="grid grid-cols-1 overflow-hidden lg:grid-cols-2">
        {/* Left — image */}
        <div className="relative hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=900&q=80"
            alt="Make an appointment"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Right — form */}
        <div className="bg-[#1a1a1a] p-8 md:p-12">
          {/* Mobile heading */}
          <div className="mb-8 lg:hidden">
            <p className="mb-2 text-xs tracking-widest text-white/40 uppercase">
              Get in touch
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Interested in {projectName}?
            </h2>
          </div>

          {submitted ? (
            <div className="flex h-full flex-col items-start justify-center gap-4 py-12">
              <div className="flex h-12 w-12 items-center justify-center bg-white">
                <svg
                  className="h-6 w-6 text-[#1a1a1a]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">
                We&apos;ll be in touch soon
              </h3>
              <p className="text-sm text-white/50">
                Thank you for your interest in {projectName}. Our consultant
                will contact you within one business day.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setForm({
                    name: "",
                    phone: "",
                    email: "",
                    visitDate: "",
                    unitType: "",
                  })
                }}
                className="mt-2 text-xs text-white/40 underline underline-offset-4 transition-colors hover:text-white"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-white/50">
                  Full Name <span className="text-white/30">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Ahmad bin Razak"
                  className="border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 transition-colors outline-none focus:border-white/40"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-white/50">
                  Phone Number <span className="text-white/30">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="e.g. +60 12-345 6789"
                  className="border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 transition-colors outline-none focus:border-white/40"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-white/50">
                  Email Address <span className="text-white/30">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g. ahmad@email.com"
                  className="border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 transition-colors outline-none focus:border-white/40"
                />
              </div>

              {/* Visit date + unit type — side by side */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-white/50">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    name="visitDate"
                    value={form.visitDate}
                    onChange={handleChange}
                    className="border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 [color-scheme:dark] transition-colors outline-none focus:border-white/40"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-white/50">Unit Type</label>
                  <select
                    name="unitType"
                    value={form.unitType}
                    onChange={handleChange}
                    className="border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 transition-colors outline-none focus:border-white/40"
                  >
                    <option value="" className="bg-[#1a1a1a]">
                      Any unit type
                    </option>
                    {unitTypes.map((t) => (
                      <option key={t} value={t} className="bg-[#1a1a1a]">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 w-full bg-white py-3.5 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-gray-100"
              >
                Make an Appointment
              </button>

              <p className="text-xs leading-relaxed text-white/30">
                By submitting this form you agree to our{" "}
                <a
                  href="/privacy"
                  className="underline underline-offset-2 transition-colors hover:text-white/60"
                >
                  Privacy Policy
                </a>
                . Your details will only be used to respond to your enquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
