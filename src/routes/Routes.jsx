import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello</h1>,
    children: [
      {
        path: "/",
      },
    ],
  },
]);

export default router;