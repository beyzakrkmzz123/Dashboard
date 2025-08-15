import { useEffect, useState } from "react"

interface FakeData {
  id: number
  name: string
  price: number
  status: string
}

export default function Dashboard() {
  const [data, setData] = useState<FakeData[]>([])

  useEffect(() => {
    fetch("/data/fake-data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
  }, [])

  return (
    <div className="p-6">
      <div className="text-2xl font-bold mb-4 text-indigo-600">📊 Dashboard</div>
      <div className="flex flex-wrap gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded-xl shadow-sm bg-yellow-100/60 hover:bg-yellow-200/70 hover:shadow-lg transition-transform"
          >
            <div className="font-semibold mb-1 text-gray-800">{item.name}</div>
            <div className="mb-1 text-gray-600">Fiyat: {item.price} ₺</div>
            <div
              className={item.status === "Aktif" ? "text-green-500" : "text-red-500"}
            >
              Durum: {item.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
