import Navbar from "./components/navbar"
import Brands from "./layouts/brands"
import Header from "./layouts/header"

export function App() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <Header />
      <Brands />
    </div>
  )
}

export default App
