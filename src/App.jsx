
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./assets/Components/Home";
import Layout from "./assets/Components/Layout";
import About from "./assets/Components/About";
import Portfolio from "./assets/Components/Portfolio";
import Contact from "./assets/Components/Contact";
import Notfound from "./assets/Components/Notfound";
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  let routers = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
