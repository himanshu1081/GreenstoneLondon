import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import ContactUs from './pages/Contactus';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about-us",
      element: <Aboutus />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
