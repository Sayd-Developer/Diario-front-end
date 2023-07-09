import LayoutAnnotation from "../layouts/LayoutAnnotation";
import LayoutHome from "../layouts/LayoutHome/LayoutHome";
import LayoutLogin from "../layouts/LayoutLogin";
import LayoutSalve from "../layouts/LayoutSalve";
import { lazy } from "react";

const Login = lazy(() => import("../pages/Login"));
const Annotation = lazy(() => import("../pages/Annotation"));
const Home = lazy(() => import("../pages/Home"));
const Salve = lazy(() => import("../components/Salve"));

function Private(Component: React.FC) {
  return <Component />;
}

export const routes = [
  {
    element: <LayoutLogin />,
    children: [{ path: "/login", element: Private(Login) }],
  },
  {
    element: <LayoutHome />,
    children: [{ path: "/", element: Private(Home) }],
  },
  {
    element: <LayoutAnnotation />,
    children: [{ path: "/anotacao", element: Private(Annotation) }],
  },
  {
    element: <LayoutSalve />,
    children: [{ path: "/salvo", element: Private(Salve) }],
  },
];
