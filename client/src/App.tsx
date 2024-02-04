import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar.tsx"
import Footer from "./components/footer.tsx"
import './index.css'

function App() {
    
    return ( 
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>  
    )
}

export default App