import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import { useEffect, useState } from "react";
import SignUp from "./SignUp";
const Router = () => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        localStorage.setItem("userData", null);
        const getUser = async () => {
            try {
                const response = await fetch("http://localhost:3000/auth/login/success", {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                }
                });
                if (response.status === 200) {
                    const resObject = await response.json();
                    setUser(resObject.user);
                    localStorage.setItem("userData", JSON.stringify(resObject.user));
                    setLoading(false)
                } else {
                    setLoading(false)
                }
            } catch (err) {
                console.log()
            }
        }
        getUser();

        }, []);

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