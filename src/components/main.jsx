import { Route,Routes } from "react-router-dom"

import Home from "../pages/home";
import About from "../pages/about";


const Main=({t})=>{
    return(
        <div className="main">
      
        <Routes>
            <Route path='/' element={<Home t={t}/>}/>
            <Route path='/about' element={<About t={t}/>}/>
        </Routes>

        </div>

    )
}



export default Main