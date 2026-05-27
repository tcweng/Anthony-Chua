"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { numeric: 17,     label: "Team Size",   prefix: "",    suffix: "",  format: false },
  { numeric: 500,    label: "Unit Solds",  prefix: "",    suffix: "+", format: false },
  { numeric: 100000, label: "Team Sales",  prefix: "RM ", suffix: "+", format: true  },
  { numeric: 20,     label: "Awards",      prefix: "",    suffix: "+", format: false },
]

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return

    let startTime: number | null = null

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }

    requestAnimationFrame(step)
  }, [started, target, duration])

  return count
}

function StatCard({
  numeric,
  label,
  prefix,
  suffix,
  format,
  started,
}: {
  numeric: number
  label: string
  prefix: string
  suffix: string
  format: boolean
  started: boolean
}) {
  const count = useCountUp(numeric, 2000, started)

  return (
    <div className="flex flex-col gap-2 border border-gray-200 bg-white p-4">
      <p className="mt-1 text-xs text-gray-500">{label}</p>
      <p className="text-3xl font-bold">
        {prefix}
        {format ? count.toLocaleString() : count}
        {suffix}
      </p>
    </div>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="mx-auto max-w-7xl">
      <div className="bg-[#f7f7f5] p-6">
        <div className="flex flex-col gap-8">
          <div className="flex w-full flex-col justify-between gap-2 lg:flex-row">
            <h2 className="text-4xl leading-tight font-medium lg:max-w-sm">
              A track record built on trust and results
            </h2>
            <p className="text-sm text-gray-500 lg:max-w-sm">
              Our team of specialists has delivered hundreds of successful
              transactions, earned industry recognition, and built lasting
              relationships driven by expertise, guided by integrity.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} started={started} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
