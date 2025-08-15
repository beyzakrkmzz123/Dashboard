import { useEffect, useState } from "react"

interface Message {
  id: number
  from: string
  subject: string
  status: string
}

export default function Inbox() {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    fetch("/data/messages.json")
      .then((res) => res.json())
      .then((json) => setMessages(json))
  }, [])

  return (
    <div className="p-6">
      <div className="text-2xl font-bold mb-4 text-blue-600">📥 Inbox</div>
      <div className="flex flex-wrap gap-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="p-4 border rounded-xl shadow-sm bg-yellow-100/60 hover:bg-yellow-200/70 hover:shadow-lg transition-transform"
          >
            <div className="mb-1">
              <div className="font-bold inline-block text-gray-700">Kimden:</div>
              <div className="inline-block ml-1">{msg.from}</div>
            </div>
            <div className="mb-1">
              <div className="font-bold inline-block text-gray-700">Konu:</div>
              <div className="inline-block ml-1">{msg.subject}</div>
            </div>
            <div
              className={
                msg.status === "Okunmadı"
                  ? "text-red-500 font-medium"
                  : "text-gray-500"
              }
            >
              {msg.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

