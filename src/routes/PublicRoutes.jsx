import LayoutDefault from "../components/layouts/LayouDefault/LayoutDefault";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

export const PublicRoutes = [
  {
    path : "/",
    element: <LayoutDefault/>,
    children : [
      {
        index: true,
        element : <Home />
      },
      {
        path : "login",
        element : <Login />
      },
      {
         path : "Contact",
         element : <Contact />
      }
      // những routes khác 
    ]
  }
]
