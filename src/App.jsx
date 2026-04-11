import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="overflow-x-clip bg-[#e8e8e8] font-display text-[#111111] leading-[1.4]">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}
