import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { productsData } from "./api/api";
import {
  createBrowserRouter,Outlet,RouterProvider,ScrollRestoration
} from "react-router-dom"


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

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>,
          loader : productsData
        }
      ]
    } , 
    {
      path: "/cart",
      element: <Layout/>,
      children: [
        {
          path: "/cart",
          element: <Cart/>,
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
