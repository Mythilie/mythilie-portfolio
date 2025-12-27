import { useState } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './App.css'
import MainLayout from './layout/mainLayout';

const routerList = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RouterProvider router={routerList}>
      </RouterProvider>
    </div>
  )
}

export default App
