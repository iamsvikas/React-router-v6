import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EditEvent from "./pages/EditEvent";
import NewEventPage from "./pages/NewEventPage";
import EventDetail from "./pages/EventDetail";
import RootLayout from "./pages/RootLayout";
import EventsRootLayout from "./pages/EventsRoot";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <EventsRootLayout />,
          children: [
            { index: true, element: <EventsPage /> },
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
