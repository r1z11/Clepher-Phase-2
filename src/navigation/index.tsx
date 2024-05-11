import * as React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    createRoutesFromElements,
} from "react-router-dom";
import SignIn from "../pages/auth/SignIn";
import Home from "../pages/dashboard/Home";

// Configure nested routes with JSX
createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<SignIn />}>
            <Route
                path="dashboard"
                element={<Home />}
            />
        </Route>
    )
);

// Or use plain objects
createBrowserRouter([
    {
        path: "/",
        element: <SignIn />,
        children: [
            {
                path: "dashboard",
                element: <Home />,
            },
        ],
    },
]);