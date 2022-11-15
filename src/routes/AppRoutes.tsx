import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CriarConta } from "../pages/CriarConta";
import Curso from "../pages/Curso";
import { Login } from "../pages/Login";
import { Recados } from "../pages/Recados";

const router = createBrowserRouter([
  {
    path: "/criar-conta",
    element: <CriarConta />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/recados",
    element: <Recados />,
  },
  {
    path: "/curso",
    element: <Curso />,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
