import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { productsData } from "./api/api";
import {
  createBrowserRouter,Outlet,RouterProvider,ScrollRestoration
} from "react-router-dom"
import Product from "./components/Product";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";

const Layout = ()=>
{
  return(
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
};

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Layout/>,
//       children:[
//         {
//           path: "/",
//           element: <Home/>,
//           loader : productsData
//         }
//       ]
//     } , 
//     {
//       path: "/cart",
//       element: <Layout/>,
//       children: [
//         {
//           path: "/cart",
//           element: <Cart/>,
//         }
//       ] 
//     } 
//   ]
// )

// Remember Layout contains Outlet which can be any children.
 const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>,
          loader: productsData,
        },
        {
          path: "/cart",
          element: <Cart/>,

        },
        {
          path: "/product/:id",
          element: <Product/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/checkout" ,
          element: <Checkout/>
        },

      ]
    }
  ]
 )

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
