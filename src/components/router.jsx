import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import { useEffect, useState } from "react";
const Router = () => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await fetch("https://red-silence-64.fly.dev/auth/login/success", {
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
                    console.log("bye")
                    setLoading(false)
                    throw new Error("authentication has failed!");
                }
            } catch (err) {
                console.log(err);
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
            <Login/>
          ),
    },
    {
        path: "/",
        element: loading ? (
            <div>Loading...</div>
          ) : user ? (
            <Home />
          ) : (
            <Navigate to="/login" />
          ),
      }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;