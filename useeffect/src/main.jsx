import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import App from "./App.jsx";
import Counter from "./components/counter/counter.jsx";
import DataFetching from "./components/api-data-fetch/data-fetch.jsx";
import WindowResize from "./components/window-resize/window-resize.jsx";
import TimerCleanup from "./components/timer-cleanup/timer-cleanup.jsx";
import InputForm from "./components/input-form/input-form.jsx";
import ThemeSwitcher from "./components/theme-switcher/theme-switcher.jsx";
import OnlineStatus from "./components/online-status/online-status.jsx";
import DebouncedInput from "./components/debounced-input/debounced-input.jsx";

// Routes setup
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/data-fetch",
        element: <DataFetching />,
      },
      {
        path: "/window-resize",
        element: <WindowResize />,
      },
      {
        path: "/timer-cleanup",
        element: <TimerCleanup />,
      },
      {
        path: "/input-form",
        element: <InputForm />,
      },
      {
        path: "/theme-switcher",
        element: <ThemeSwitcher />,
      },
      {
        path: "/online-status",
        element: <OnlineStatus />,
      },
      {
        path: "/debounced-input",
        element: <DebouncedInput />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
