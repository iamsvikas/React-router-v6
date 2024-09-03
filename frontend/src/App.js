import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EditEvent from "./pages/EditEvent";
import NewEventPage from "./pages/NewEventPage";
import EventDetail from "./pages/EventDetail";
import RootLayout from "./pages/RootLayout";
import EventsRootLayout from "./pages/EventsRoot";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <EventsRootLayout />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: eventsLoader,
            },
            { path: ":eventId", element: <EventDetail /> },
            { path: "new", element: <NewEventPage /> },
            { path: ":eventId/edit", element: <EditEvent /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
