import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import Error404 from "../error-page/Error404";
import Checkout from "../checkout/Checkout";
import Bookmark from "../bookmark/Bookmark";
import Markedservices from "../bookmark/Markedservices";
import Privetroute from "../privetroute/Privetroute";
import Services from "../service/Services";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error404></Error404>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/login',
          element : <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path:'/checkout/:id',
          element: <Checkout></Checkout>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/bookmark/:id',
          element: <Privetroute>   <Bookmark></Bookmark> </Privetroute>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/markedservices',
          element: <Privetroute><Markedservices></Markedservices></Privetroute>
        }
      ]
    },
  ]);
  

  export default router;
  