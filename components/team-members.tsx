import { Star, Phone, ChevronLeft, ChevronRight } from "lucide-react"

const agents = [
  {
    name: "Olivia Darnee",
    role: "Real estate agent",
    rating: 5.0,
    reviews: 32,
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
  },
  {
    name: "Carlos Garcia",
    role: "Real estate agent",
    rating: 4.8,
    reviews: 28,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
  {
    name: "Ari Chen",
    role: "Senior real estate agent",
    rating: 4.9,
    reviews: 45,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
  },
  {
    name: "Marcus Lee",
    role: "Real estate agent",
    rating: 4.7,
    reviews: 19,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
  },
]

export function TeamMembers() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Expert agents</h2>
        <div className="flex gap-2">
          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition-colors hover:bg-gray-50">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition-colors hover:bg-gray-50">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {agents.map((agent) => (
          <div
            key={agent.name}
            className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
          >
            <div className="relative h-52 overflow-hidden bg-gray-100">
              <img
                src={agent.img}
                alt={agent.name}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold">{agent.name}</h3>
              <p className="text-xs text-gray-500">{agent.role}</p>
              <div className="mt-2 flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-medium">{agent.rating}</span>
                <span className="text-xs text-gray-400">({agent.reviews})</span>
              </div>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 rounded-full border border-gray-200 py-1.5 text-xs font-medium transition-colors hover:bg-gray-50">
                  Video call
                </button>
                <button className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 transition-colors hover:bg-gray-50">
                  <Phone className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
