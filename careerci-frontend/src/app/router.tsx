import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorPage from "../routes/ErrorPage";
import Jobs from "../routes/Jobs";
import Resumes from "../routes/Resumes";
import Skills from "../routes/Skills";
import Certifications from "../routes/Certifications";
import BragSheet from "../routes/BragSheet";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Login from "../routes/Login";
import Register from "../routes/Register";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "jobs",
            element: <Jobs />,
          },
          {
            path: "resumes",
            element: <Resumes />,
          },
          {
            path: "skills",
            element: <Skills />,
          },
          {
            path: "certifications",
            element: <Certifications />,
          },
          {
            path: "bragsheet",
            element: <BragSheet />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

export default router;
