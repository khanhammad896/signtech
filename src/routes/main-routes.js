import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useUI } from "../context/ui.context";

//Home Screen
import Home from "../pages/home";

//Auth Stack Screens
import Auth from "../pages/auth/auth";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import ForgotPassword from "../pages/auth/forgot-password";

//User Stack Screens
import Templates from "../pages/dashboard/templates";
import SettingRoot from "../pages/dashboard/setting/setting-root";
import Settings from "../pages/dashboard/setting/setting";
import VerificationScreen from "../pages/auth/verfication-code";
import ChangePassword from "../pages/dashboard/setting/change-password";
import Tutorial from "../pages/dashboard/tutorial";

// Documents Pages
import DocumentRoot from "../pages/dashboard/documents/document-root";
import DocumentsListing from "../pages/dashboard/documents/documents-listing";
import DocumentDetails from "../pages/dashboard/documents/document-details";

// Contract Pages
import Contract from "../pages/contract/contract";
import Invite from "../pages/contract/invite";
import ContractDetail from "../pages/contract/contract-detail";

// Solution Pagees
import Solutions from "../pages/solutions";

// Plans & Pricing Pages
import PlansPricing from "../pages/plans-pricing";

// Blogs Pages
import Blogs from "../pages/blogs";
import BlogListing from "../pages/blogs/blog-listing";
import BlogDetail from "../pages/blogs/blog-detail";

// FAQs Pages
import Faqs from "../pages/faqs";

import NotFound from "../pages/error/not-found";

export const MainRoutes = () => {
  const { user } = useUI();

  const ProtectedRoute = ({ children }) => {
    if (user.loggedIn) {
      return children;
    } else {
      return <Navigate to="/auth" />;
    }
  };

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth",
      element: <Auth />,
      children: [
        {
          path: "",
          element: <Login />,
        },
        {
          path: "register",
          element: <Signup />,
        },
        {
          path: "forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "verification-code",
          element: <VerificationScreen />,
        },
      ],
    },
    {
      path: "/documents",
      element: (
        <ProtectedRoute>
          {user.role === "AGENT" ? (
            <DocumentRoot />
          ) : (
            <Navigate to="not-found" />
          )}
        </ProtectedRoute>
      ),
      children: [
        {
          path: "",
          element: <DocumentsListing />,
        },
        {
          path: "details/:id",
          element: <DocumentDetails />,
        },
      ],
    },
    {
      path: "/templates",
      element: (
        <ProtectedRoute>
          {user.isAgent ? <Templates /> : <Navigate to="/not-found" />}
        </ProtectedRoute>
      ),
    },
    {
      path: "/tutorial",
      element: (
        <ProtectedRoute>
          {user.isAgent ? <Tutorial /> : <Navigate to="/not-found" />}
        </ProtectedRoute>
      ),
    },
    {
      path: "/profile",
      element: (
        <ProtectedRoute>
          {user.role === "AGENT" ? (
            <SettingRoot />
          ) : (
            <Navigate to="/not-found" />
          )}
        </ProtectedRoute>
      ),
      children: [
        {
          path: "",
          element: <Settings />,
        },
        {
          path: "change-password",
          element: <ChangePassword />,
        },
      ],
    },
    {
      path: "/contract",
      element: <Contract />,
      children: [
        {
          path: "",
          element: <Invite />,
        },
        {
          path: "detail/:id/:token",
          element: <ContractDetail />,
        },
      ],
    },
    {
      path: "/solutions",
      element: <Solutions />,
    },
    {
      path: "/plans-pricing",
      element: <PlansPricing />,
    },
    {
      path: "/faqs",
      element: <Faqs />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
      children: [
        {
          path: "",
          element: <BlogListing />,
        },
        {
          path: ":id",
          element: <BlogDetail />,
        },
      ],
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={routes} />;
};
