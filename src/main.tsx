import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/customers",
                element: <h1>customers</h1>,
            },
            {
                path: "/items",
                element: <h1>items</h1>,
            },
            {
                path: "/placeOrder",
                element: <h1>Place Order</h1>,
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
