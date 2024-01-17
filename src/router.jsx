import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Layout from "./Layout";

const router = createBrowserRouter([
    {path:'/', element: <Layout />,
    children: [

        {path:'', element:<Home/>},
        {path: 'about', element:<About/>},
        {path: 'projects', element:<Projects/>},
        {path: 'contact', element:<Contact/>},
    ]
}
])

export default router;