import LayoutDefault from "../components/layouts/LayouDefault/LayoutDefault";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";

export const PublicRoutes = [
  {
    path : "/",
    element: <LayoutDefault/>,
    children : [
      {
        path : "",
        element : <Home />
      },
      {
         path : "/Contact",
         element : <Contact />
      }
    ]
  }
]
