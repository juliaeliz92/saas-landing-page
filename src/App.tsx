import Navbar from "./components/navbar"
import Brands from "./layouts/brands"
import Header from "./layouts/header"
import ProductView from "./layouts/product-view"

export function App() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <Header />
      <Brands />
      <ProductView />
    </div>
  )
}

export default App
