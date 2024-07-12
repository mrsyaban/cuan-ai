import { RouterProvider, createBrowserRouter } from "react-router-dom";
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

export default function App() {
  // TODO Tambah handle authorization
  const { isAuthenticated, setUser } = useAuthStore();
  console.log(isAuthenticated);
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
        ...(isAuthenticated
          ? [
              { path: "/", element: <AnalyzerPage /> },
              { path: "/profile", element: <ProfilePage /> },
              { path: "/portfolio", element: <PortfolioPage /> },
              { path: "/watchlist", element: <WatchlistPage /> },
            ]
          : [
              { path: "/", element: <LandingPage /> },
              { path: "/signup", element: <SignUpPage /> },
              { path: "/login", element: <LoginPage /> },
            ]),
        { path: "/analyzer", element: <AnalyzerPage /> },
      ],
    },
    { path: "/risk-profile-test", element: <RiskProfileTest /> },
    { path: "/result", element: <AnalysisResultPage /> },
    { path: "*", element: <NotFoundPage /> },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
