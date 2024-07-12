import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
  const token = ""; 

  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        ...(token
          ? [
            { path: "/profile", element: <ProfilePage /> },
            { path: "/portfolio", element: <PortfolioPage /> },
            { path: "/watchlist", element: <WatchlistPage /> },
          ]
          : [
              { index: true, element: <LandingPage /> },
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
