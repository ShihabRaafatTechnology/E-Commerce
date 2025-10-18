import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from '@pages/Error';

// SuspensePageFallback Component
import SuspensePageFallback from "@components/feedback/SuspensePageFallback"
import ProtectRoute from '@components/auth';

//Layouts
const MainLayout = lazy(() => import('@layouts/MainLayout'));;

// Pages
const Home = lazy(() => import('@pages/Home'));
const Categories = lazy(() => import('@pages/Categories'));
const Products = lazy(() => import('@pages/Products'));
const AboutUs = lazy(() => import('@pages/AboutUs'));
const Login = lazy(() => import('@pages/Login'));
const Register = lazy(() => import('@pages/Register'));
const Profile = lazy(()=> import('@pages/Profile'))
const ShoppingCart = lazy(() => import('@pages/ShoppingCart'));
const Wishlist = lazy(() => import('@pages/WishList')); 
/*const Wishlist = lazy(() => import('@pages/WishList')); */

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectRoute><SuspensePageFallback><MainLayout /></SuspensePageFallback></ProtectRoute>,
    errorElement: <SuspensePageFallback><Error /></SuspensePageFallback>,
    children: [{
      index: true,
      element: <ProtectRoute><SuspensePageFallback><Home /></SuspensePageFallback></ProtectRoute>
    }, {
      path: "categories",
      element: <ProtectRoute><SuspensePageFallback><Categories /></SuspensePageFallback></ProtectRoute>
    }, {
      path: "categories/products/:prefix",
      element: <ProtectRoute><SuspensePageFallback><Products /></SuspensePageFallback></ProtectRoute>,
      loader: ({ params }) => {
        if (
          typeof params.prefix !== "string" ||
          !/^[a-z]+$/i.test(params.prefix)
        ) {
          throw new Response("Bad Request", {
            statusText: "Category not found",
            status: 400,
          });
        }
        return true;
      },
    }, {
      path: "products/:prefix",
      element: <ProtectRoute><Suspense fallback="Loading please wait..."><Products /></Suspense></ProtectRoute>,
      loader: ({ params }) => {
        if (
          typeof params.prefix !== "string" ||
          !/^[a-z]+$/i.test(params.prefix)
        ) {
          throw new Response("Bad Request", {
            statusText: "Category not found",
            status: 400,
          });
        }
        return true;
      },
    }, {
      path: "cart",
      element: <ProtectRoute><Suspense fallback="Loading please wait..."><ShoppingCart /></Suspense></ProtectRoute>
    }, {
      path: "wishlist",
      element: <ProtectRoute><Suspense fallback="Loading please wait..."><Wishlist /></Suspense></ProtectRoute>
    }, {
      path: "about-us",
      element: <ProtectRoute><Suspense fallback="Loading please wait..."><AboutUs /></Suspense></ProtectRoute>
    }, {
      path: "sign-in",
      element: <Suspense fallback="Loading please wait..."><Login /></Suspense>
    }, {
      path: "register",
      element: <Suspense fallback="Loading please wait..."><Register /></Suspense>
    }, {
      path: "profile",
      element: <ProtectRoute><Suspense fallback="Loading please wait..."><Profile /></Suspense></ProtectRoute>
    }]
  }
]);
const RoutesApp = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default RoutesApp;