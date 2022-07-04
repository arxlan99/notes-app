import { lazy } from "react";
import Profile from "../profile/Profile";

const NotesApp = lazy(() => import("./NotesApp"));

const NotesAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "apps/notes",
      element: <NotesApp />,
      children: [
        {
          path: ":filter",
          element: <NotesApp />,
          children: [
            {
              path: ":id",
              element: <NotesApp />,
            },
          ],
        },
      ],
    },
    {
      path: "apps/profile",
      element: <Profile />,
    },
  ],
};

export default NotesAppConfig;
