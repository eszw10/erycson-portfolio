import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import AppLayout from "./components/AppLayout";
import ScrollTopWrapper from "./components/ScrollTopWrapper";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Project = lazy(() => import("./pages/Project"));

export default function App() {
  const router = createBrowserRouter([
    {
      element: (
        <ScrollTopWrapper>
          <Toaster
            toastOptions={{
              style: {
                color: "var(--color-blanco)",
                background: "var(--color-bordes)",
              },
              success: { duration: 3000 },
              error: { duration: 5000 },
            }}
          />
          <AppLayout />
        </ScrollTopWrapper>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/projects/:projectId",
          element: <Project />,
        },
        {
          path: "/contacts",
          element: <Contacts />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
