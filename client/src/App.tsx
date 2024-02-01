import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar.tsx"
import './index.css'

function App() {
    
    return ( 
      <>
        <Navbar />
        <Outlet />
      </>  
    )
}

export default App