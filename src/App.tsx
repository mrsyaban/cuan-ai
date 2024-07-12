import {
  RouterProvider,
  createBrowserRouter,
  // Navigate
} from "react-router-dom";

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
// import LandingPage from "./pages/landingpage";
// import AnalyzerComponent from "./components/analysis";
import LandingPage from "./pages/landingpage";
import SubscribePage from "./pages/subscribe";
import AdroAnalysisSection from "./components/stocks-analysis/adaro";

export default function App() {
  const routes = [
    {
      path: "/",
      element: <Layout isAuthenticated={true} />,
      children: [
        {
          path: "/",
          element: <AnalyzerPage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/portfolio",
          element: <PortfolioPage />,
        },
        {
          path: "/watchlist",
          element: <WatchlistPage />,
        },
      ],
    },
    {
      path: "/free",
      element: <Layout isAuthenticated={false} />,
      children: [
        {
          path: "/free/",
          element: <LandingPage />,
        },
        {
          path: "/free/analyzer",
          element: <AnalyzerPage />,
        },
        {
          path: "/free/signup",
          element: <SignUpPage />,
        },
        {
          path: "/free/login",
          element: <LoginPage />,
        },
      ],
    },
    {
      path:"/adro",
      element: <AdroAnalysisSection/>
    },
    {
      path: "/subscribe",
      element: <SubscribePage />
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
