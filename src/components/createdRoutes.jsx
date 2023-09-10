import {createBrowserRouter} from 'react-router-dom'

import About from '../pages/about'
import Home from '../pages/home'
const createdRouter=createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/about",
        element: <About/>,
    }
])

export default createdRouter