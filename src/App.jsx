import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
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
