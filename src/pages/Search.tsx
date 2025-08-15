import { useEffect, useState } from "react"

interface Product {
  id: number
  name: string
  price: number
  status: string
}

export default function Search() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch("/data/search.json")
      .then((res) => res.json())
      .then((json) => setProducts(json))
  }, [])

  return (
    <div className="p-6">
      <div className="text-2xl font-bold mb-4 text-green-600">🔍 Ürün Arama</div>

      <div className="flex flex-wrap gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded-xl shadow-sm bg-yellow-100/60 hover:bg-yellow-200/70 hover:shadow-lg transition-transform"
          >
            <div className="font-semibold text-lg mb-1 text-gray-800">{product.name}</div>
            <div className="mb-1 text-gray-600">
              Fiyat: {product.price.toLocaleString()} ₺
            </div>
            <div
              className={
                product.status === "Aktif"
                  ? "text-green-500 font-medium"
                  : "text-red-500 font-medium"
              }
            >
              {product.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
