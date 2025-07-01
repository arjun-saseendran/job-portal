import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { store } from "./redux/store.js";
import { Home } from "./pages/Home/Home.jsx";
import { Jobs } from "./pages/jobs/Jobs.jsx";
import {Root} from "./routes/Root";
import { Notifications } from "./pages/notifications/Notifications.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/notifications",
        element: <Notifications/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} store={store} />
  </StrictMode>,
);
