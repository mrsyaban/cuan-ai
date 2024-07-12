import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Component imports
import LandingPage from "./pages/landing-page";
import AnalyzerPage from "./pages/analyzer";
import NotFoundPage from "./pages/not-found";
import AnalysisResultPage from "./pages/result";
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/login";


export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/analyzer",
      element: <AnalyzerPage />,
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
