import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import { useEffect, useState } from "react";
import SignUp from "./SignUp";
const Router = () => {
  const initialUser = JSON.parse(localStorage.getItem("userData"));
  const [user, setUser] = useState(initialUser);

    const router = createBrowserRouter([
    {
        path: "/login",
        element: user ? (
            <Navigate to="/" />
          ) : (
            <Login setUser = {setUser} setLoading={setLoading}/>
          ),
    },
    {
        path: "/",
        element:  user ? (
            <Home setUser={setUser}/>
          ) : (
            <Navigate to="/login" />
          ),
      },
      {
        path: "/sign-up",
        element: user ? (
            <Navigate to="/" />
          ) : (
            <SignUp/>
          ),
      },
      {
        path: "/:id",
        element: user ? (
            <Home setUser ={setUser}/>
          ) : (
            <Navigate to="/login" />
          ),
      }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;