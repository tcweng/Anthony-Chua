"use client"

import { useState } from "react"

const units = [
  {
    type: "Type A",
    size: "550 sq ft",
    beds: 1,
    baths: 1,
    description:
      "A compact and thoughtfully designed studio suite ideal for young professionals or investors seeking high rental yield. Fully optimised floor plan with open-plan living and dining.",
    img: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=900&q=80",
  },
  {
    type: "Type B1",
    size: "780 sq ft",
    beds: 2,
    baths: 2,
    description:
      "A well-proportioned 2-bedroom layout with generous living space and a dedicated dining area. Designed for comfortable city living with panoramic views from every room.",
    img: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=900&q=80",
  },
  {
    type: "Type B2",
    size: "850 sq ft",
    beds: 2,
    baths: 2,
    description:
      "An enhanced 2-bedroom variant featuring an extended balcony and a larger master suite with an en-suite walk-in wardrobe. Perfect for those who value both space and style.",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80",
  },
  {
    type: "Type C",
    size: "1,100 sq ft",
    beds: 3,
    baths: 2,
    description:
      "A spacious 3-bedroom family layout with a dedicated utility room and dual-aspect views. Ideal for families or dual-income households seeking premium city living.",
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80",
  },
  {
    type: "Type D",
    size: "1,420 sq ft",
    beds: 4,
    baths: 3,
    description:
      "The pinnacle of the collection — a full-floor 4-bedroom penthouse-style unit with a private foyer, chef's kitchen, and unobstructed skyline views of the KLCC corridor.",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=900&q=80",
  },
]

export function LayoutTabs() {
  const [active, setActive] = useState(0)
  const unit = units[active]

  return (
    <div>
      {/* Tab buttons */}
      <div className="mb-8 flex flex-wrap gap-2">
        {units.map((u, i) => (
          <button
            key={u.type}
            onClick={() => setActive(i)}
            className={`border px-5 py-2 text-sm font-medium transition-colors ${
              active === i
                ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-400"
            }`}
          >
            {u.type}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Floor plan image */}
        <div className="overflow-hidden border border-gray-100 bg-gray-50">
          <img
            src={unit.img}
            alt={`Floor plan for ${unit.type}`}
            className="h-96 w-full object-cover transition-opacity duration-300"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center gap-6 bg-white px-4 py-6 lg:px-12">
          <div>
            <p className="mb-1 text-xs tracking-widest text-gray-400 uppercase">
              Unit Type
            </p>
            <h3 className="text-3xl font-semibold">{unit.type}</h3>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="border border-gray-100 bg-white p-4">
              <p className="mb-1 text-xs text-gray-400">Built-up Area</p>
              <p className="text-lg font-semibold">{unit.size}</p>
            </div>
            <div className="border border-gray-100 bg-white p-4">
              <p className="mb-1 text-xs text-gray-400">Bedrooms</p>
              <p className="text-lg font-semibold">{unit.beds}</p>
            </div>
            <div className="border border-gray-100 bg-white p-4">
              <p className="mb-1 text-xs text-gray-400">Bathrooms</p>
              <p className="text-lg font-semibold">{unit.baths}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
