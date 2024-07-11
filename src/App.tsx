import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Component imports
import LandingPage from "./pages/landing-page";
import Homepage from "./pages/homepage";
import NotFoundPage from "./pages/not-found";
import AnalysisResultPage from "./pages/result";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/home",
      element: <Homepage />,
    },
    {
      path: "/result",
      element: <AnalysisResultPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
