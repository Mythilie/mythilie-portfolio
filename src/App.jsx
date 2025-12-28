import { useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/mainLayout";
import ProjectList from "./pages/projectList";
import Footer from "./components/footer";
import Body from "./components/body";

const routerList = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Body />
            <Footer />
          </>
        ),
      },
      {
        path: "projects",
        element: <ProjectList />,
      },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <RouterProvider router={routerList}></RouterProvider>
    </div>
  );
}

export default App;
