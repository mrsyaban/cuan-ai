import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import { useEffect } from "react";
import useAuthStore from "./store/authStore";

// Component imports
import AnalyzerPage from "./pages/analyzer";
import NotFoundPage from "./pages/not-found";
import AnalysisResultPage from "./pages/result";
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/registered/profile";
import PortfolioPage from "./pages/registered/portofolio";
import WatchlistPage from "./pages/registered/watchlist";
import RiskProfileTest from "./components/risk-profile-test";
import Layout from "./pages/layout";
import LandingPage from "./pages/landingpage";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, riskProfile } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (isAuthenticated && !riskProfile) {
    return <Navigate to="/risk-profile-test" />;
  }

  return children;
}

export default function App() {
  const { isAuthenticated, setUser } = useAuthStore();
  console.log("auth",isAuthenticated);

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

  const routes = [
    {
      path: "/",
      element: <Layout isAuthenticated={isAuthenticated} />,
      children: [
        {
          path: "/",
          element: isAuthenticated ? (
            <ProtectedRoute>
              <AnalyzerPage />
            </ProtectedRoute>
          ) : (
            <LandingPage />
          ),
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/portofolio",
          element: (
            <ProtectedRoute>
              <PortfolioPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/watchlist",
          element: (
            <ProtectedRoute>
              <WatchlistPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/signup",
          element: !isAuthenticated ? <SignUpPage /> : <Navigate to="/" />,
        },
        {
          path: "/login",
          element: !isAuthenticated ? <LoginPage /> : <Navigate to="/" />,
        },
        {
          path: "/analyzer",
          element: <AnalyzerPage />,
        },
      ],
    },
    {
      path: "/risk-profile-test",
      element: <RiskProfileTest />,
    },
    {
      path: "/result",
      element: <AnalysisResultPage />,
    },
    {
      path: "/test",
      element: <WatchlistPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
