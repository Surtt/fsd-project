import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    /* Component: Layout, */
    children: [
      { index: true, element: <div>Main</div> },
      { path: "community", element: <div>Community</div> },
      {
        path: "article",
        children: [{ path: ":alias", element: <div>Article</div> }],
      },
      {
        path: "profile",
        children: [
          { index: true, element: <div>Profile</div> },
          { path: "edit", element: <div>EditProfile</div> },
        ],
      },
    ],
  },
]);
