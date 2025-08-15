// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../app/layout"
import Dashboard from "@/pages/dashboard"
import Inbox from "@/pages/Inbox"
import Calendar from "@/pages/Calendar"
import Search from "@/pages/Search"
import Settings from "@/pages/Settings"

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-yellow-300 to-orange-400">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="search" element={<Search />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
