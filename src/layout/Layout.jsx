import { Outlet } from "react-router-dom"
import Nav from "../components/Navbar/Nav"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"


function Layout() {
  return (
    <div className="inter">
      {/* nav */}
      <Nav></Nav>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Layout