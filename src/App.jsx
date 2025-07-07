import NavBar from './utilities/NavBar'
import './App.css'

import { Outlet } from 'react-router-dom'
import AboutUs from './pages/AboutUs'

function App() {
    return (
        <div className="flex flex-col items-center font-grotesk">
            <NavBar />
            <Outlet />
        </div>
    )
}

export default App
