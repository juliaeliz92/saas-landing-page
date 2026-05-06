import Navbar from "./components/navbar"
import Brands from "./layouts/brands"
import Header from "./layouts/header"
import ProductView from "./layouts/product-view"
import Features from "./layouts/features"
import Feedbacks from "./layouts/feedbacks"

export function App() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <Header />
      <Brands />
      <ProductView />
      <Features />
      <Feedbacks /> 
    </div>
  )
}

export default App
