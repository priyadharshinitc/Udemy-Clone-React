import "./style.css"
import Navbar from "./components/Navbar.js"
import SaleImage from "./components/Sale Image.js"
import Categories from "./components/Categories.js"
import Recommendation from "./components/Recommendation.js"
import Topics from "./components/Topics.js"
import Popular from "./components/Popular.js"
import Footer from "./components/Footer.js"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <SaleImage></SaleImage>
      <Categories></Categories>
      <Recommendation></Recommendation>
      <Topics></Topics>
      <Popular></Popular>
      <Footer></Footer>
    </>
  )
}

export default App