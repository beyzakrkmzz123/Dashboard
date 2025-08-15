import { useEffect, useState } from "react"

interface Setting {
  id: number
  key: string
  value: string
}

export default function Settings() {
  const [settings, setSettings] = useState<Setting[]>([])

  useEffect(() => {
    fetch("/data/settings.json")
      .then((res) => res.json())
      .then((json) => setSettings(json))
  }, [])

  return (
    <div className="p-6">
      <div className="text-2xl font-bold mb-4 text-purple-600">⚙️ Ayarlar</div>
      <div className="flex flex-wrap gap-4">
        {settings.map((s) => (
          <div
            key={s.id}
            className="p-4 border rounded-xl shadow-sm bg-yellow-100/60 hover:bg-yellow-200/70 hover:shadow-lg transition-transform"
          >
            <div>
              <div className="font-bold inline-block text-gray-700">{s.key}:</div>
              <div className="inline-block ml-1">{s.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
