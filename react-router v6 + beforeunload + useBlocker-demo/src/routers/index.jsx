import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import PageA from "../PageA";
import PageB from "../PageB";

const _router = [
  { index: true, element: <Navigate to="A" replace /> },
  {
    path: "A",
    element: <PageA />,
  },
  {
    path: "B",
    element: <PageB />,
  },
];

const router = createBrowserRouter(_router);
export default function DataRouterProvider() {
  console.log("router", router);
  return <RouterProvider router={router} />;
}
