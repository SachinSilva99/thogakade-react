import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>hello</h1>,
    },
    {
        path: "/hi",
        element: <h1>hi</h1>,
    },
]);
function App() {
    return (
        <>
            <NavBar />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
