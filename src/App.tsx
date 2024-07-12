<<<<<<< HEAD
import { useEffect, useState } from "react";
import {
  Navigate,
=======
import {
>>>>>>> b13bd53aaa3d9e3703d5bad24d6d1c67ef302236
  RouterProvider,
  createBrowserRouter,
  // Navigate
} from "react-router-dom";
<<<<<<< HEAD
import useAuthStore from "./store/authStore";
=======
>>>>>>> b13bd53aaa3d9e3703d5bad24d6d1c67ef302236

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
import AdroAnalysisSection from "./components/stocks-analysis/adaro";
import LandingPage from "./pages/landingpage";
import SubscribePage from "./pages/subscribe";

export default function App() {
  const routes = [
    {
      path: "/",
      element: <Layout isAuthenticated={true} />,
      children: [
        {
          path: "/",
<<<<<<< HEAD
          // element: isAuthenticated ? (
          //   <ProtectedRoute>
          //   <AnalyzerComponent/>
          //   </ProtectedRoute>
          // ) : (
          //   <LandingPage />
          // ),
          element: (
            <ProtectedRoute>
              <AnalyzerPage />
            </ProtectedRoute>
          ),
=======
          element: <AnalyzerPage />,
>>>>>>> b13bd53aaa3d9e3703d5bad24d6d1c67ef302236
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
<<<<<<< HEAD
          path: "/signup",
          element: !isAuthenticated ? <SignUpPage /> : <Navigate to="/" />,
        },
        {
          path: "/login",
          element: !isAuthenticated ? <LoginPage /> : <Navigate to="/" />,
=======
          path: "/free/",
          element: <LandingPage />,
        },
        {
          path: "/free/analyzer",
          element: <AnalyzerPage />,
>>>>>>> b13bd53aaa3d9e3703d5bad24d6d1c67ef302236
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
      path: "/adro",
      element: <AdroAnalysisSection/>
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
