import { useEffect, useState } from "react"

interface Event {
  id: number
  title: string
  date: string
  time: string
}

export default function Calendar() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    fetch("/data/events.json") 
      .then((res) => res.json())
      .then((json) => setEvents(json))
  }, [])

  return (
    <div className="p-6">
      <div className="text-2xl font-bold mb-4">📅 Takvim</div>

      <div className="flex flex-wrap gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-4 border rounded-xl shadow-sm bg-yellow-100/60 hover:bg-yellow-200/70 hover:shadow-lg transition-transform">
            <div className="text-lg font-semibold mb-2">📝 {event.title}</div>
            <div className="text-gray-600 mb-1">📆 {event.date}</div>
            <div className="text-blue-500 font-medium">⏰ {event.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
