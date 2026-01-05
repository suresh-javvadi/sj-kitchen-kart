import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestaurantsHome from "../pages/restaurantsHome/RestaurantsHome";
import Header from "../components/Header";
import Restaurant from "../pages/restaurant/restaurant";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main className="flex-1 mx-20 py-6 mt-20">
        <Outlet />
      </main>
    </div>
  );
};

const AppRoutes = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <RestaurantsHome />,
        },
        {
          path: "restaurants",
          element: <RestaurantsHome />,
        },
        {
          path: "restaurant/:id",
          element: <Restaurant />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default AppRoutes;
