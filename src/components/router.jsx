import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import { useEffect, useState } from "react";
import SignUp from "./SignUp";
const Router = () => {
  const initialUser = JSON.parse(localStorage.getItem("userData"));
  const [user, setUser] = useState(initialUser);
    const [loading, setLoading] = useState(true);
    const router = createBrowserRouter([
    {
        path: "/login",
        element: loading ? (
            <div>Loading...</div>
          ) : user ? (
            <Navigate to="/" />
          ) : (
            <Login setUser = {setUser} setLoading={setLoading}/>
          ),
    },
    {
        path: "/",
        element: loading ? (
            <div>Loading...</div>
          ) : user ? (
            <Home setUser={setUser}/>
          ) : (
            <Navigate to="/login" />
          ),
      },
      {
        path: "/sign-up",
        element: loading ? (
            <div>Loading...</div>
          ) : user ? (
            <Navigate to="/" />
          ) : (
            <SignUp/>
          ),
      },
      {
        path: "/:id",
        element: loading ? (
            <div>Loading...</div>
          ) : user ? (
            <Home setUser ={setUser}/>
          ) : (
            <Navigate to="/login" />
          ),
      }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;