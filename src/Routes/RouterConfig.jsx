import { createBrowserRouter } from "react-router-dom";
import Introduction from "../Pages/Introduction/Introduction";
import Experiences from "../Pages/Experiences/Experiences";
import Contacts from "../Pages/Contact/Contact";
import NavbarLayout from "../Components/Navbar/NavbarLayout";
import Skills from "../Pages/Skills/Skills";

export const RouterConfig = createBrowserRouter(
  [
    {
      path: "/",
      element: <NavbarLayout />,
      children: [
        {
          path: "/",
          element: <Introduction />,
        },
        {
          path: "/experiences",
          element: <Experiences />,
        },
        {
          path: "/contact",
          element: <Contacts />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
      ],
    },
  ],
  {
    basename: "/portfolio",
  }
);
