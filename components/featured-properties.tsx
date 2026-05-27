import { MapPin, Maximize2, BedDouble, Bath } from "lucide-react"

const properties = [
  {
    name: "Serenity Tower",
    price: "$482,000",
    location: "Oakbrook Marina Quarters",
    sqft: 150,
    beds: 3,
    baths: 2,
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
  },
  {
    name: "Island Retreat",
    price: "$350,036",
    location: "Saltwater Boulevard Marina",
    sqft: 180,
    beds: 4,
    baths: 3,
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
  },
  {
    name: "Mountain Lodge",
    price: "$905,000",
    location: "Pine Summit Highland Drive",
    sqft: 220,
    beds: 5,
    baths: 4,
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
  },
  {
    name: "Campania Resort Lux",
    price: "$200,000",
    location: "Riviera Coastal Terrace",
    sqft: 120,
    beds: 2,
    baths: 2,
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
  },
  {
    name: "Solum Eco-Retreat",
    price: "$450,036",
    location: "Greenfield Eco Park Lane",
    sqft: 160,
    beds: 3,
    baths: 2,
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80",
  },
]

export function FeaturedProperties() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-24">
      <h2 className="mb-8 text-4xl font-medium">Featured Properties</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((p) => (
          <div
            key={p.name}
            className="group cursor-pointer overflow-hidden border border-gray-200 bg-white transition-shadow hover:shadow-md"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-semibold">{p.name}</h3>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-gray-500">
                    <MapPin className="h-3 w-3" />
                    {p.location}
                  </p>
                </div>
                <span className="text-sm font-bold text-[#1a1a1a]">
                  {p.price}
                </span>
              </div>
              <div className="mt-3 flex items-center gap-4 border-t border-gray-100 pt-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Maximize2 className="h-3.5 w-3.5" /> {p.sqft} m²
                </span>
                <span className="flex items-center gap-1">
                  <BedDouble className="h-3.5 w-3.5" /> {p.beds} beds
                </span>
                <span className="flex items-center gap-1">
                  <Bath className="h-3.5 w-3.5" /> {p.baths} baths
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
