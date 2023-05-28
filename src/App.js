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


const Layout = ()=>
{
  return(
    <div>
      <Header/>
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
        }

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
