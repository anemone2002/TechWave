import { useState } from 'react'

import './App.css'
import HomePage from './pages/HomePage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductPage from './components/ProductPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product-section",
    element: <ProductPage/>
  }
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
