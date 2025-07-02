import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { store } from "./redux/store.js";
import { Home } from "./pages/Home/Home.jsx";
import { Jobs } from "./pages/Jobs/Jobs.jsx";
import { Root } from "./routes/Root";
import { Notifications } from "./pages/Notifications/Notifications.jsx";
import { Provider } from "react-redux";
import { PostJob } from "./pages/PostJob/PostJob.jsx";

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
        element: <Notifications />,
      },
      {
        path: "post/job",
        element: <PostJob />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
