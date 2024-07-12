import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import useAuthStore from "./store/authStore";

// Component imports
import LandingPage from "./pages/landing-page";
import AnalyzerPage from "./pages/analyzer";
import NotFoundPage from "./pages/not-found";
import AnalysisResultPage from "./pages/result";
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/login";

export default function App() {
  // TODO Tambah handle authorization
  const { isAuthenticated, setUser } = useAuthStore();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + "/user", {
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
        const user = await response.json();
        if (user) setUser(user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [setUser]);

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
