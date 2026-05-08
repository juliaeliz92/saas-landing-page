import Navbar from "./components/navbar"
import Brands from "./layouts/brands"
import Header from "./layouts/header"
import ProductView from "./layouts/hero"
import Features from "./layouts/features"
import Feedbacks from "./layouts/feedbacks"
import CTA from "./layouts/cta"
import Footer from "./layouts/footer"

export function App() {
  return (
    <div>
      <Navbar />
      <ProductView /> 
      <Header />
      <main>
        <Brands />
        <Features /> 
        <Feedbacks />
        <CTA />
      </main>
      <Footer /> 
    </div>
  )
}

export default App
