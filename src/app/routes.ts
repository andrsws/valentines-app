import { createBrowserRouter } from "react-router";
import { Home } from "./screens/Home";
import { ReadWhen } from "./screens/ReadWhen";
import { Letter } from "./screens/Letter";
import { Memories } from "./screens/Memories";
import { NotFound } from "./screens/NotFound";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "read-when", Component: ReadWhen },
      { path: "letter/:type", Component: Letter },
      { path: "memories", Component: Memories },
      { path: "*", Component: NotFound },
    ],
  },
]);