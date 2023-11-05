import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Navigation from "./components/navigation/Navigation"

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
      </>
  )
}

export default Layout