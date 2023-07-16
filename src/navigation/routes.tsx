import LayoutApp from "../layouts/LayoutHome/LayoutHome"
import { lazy } from "react"

const Login = lazy(() => import("../pages/Login"))
const Annotation = lazy(() => import("../pages/Annotation"))
const Home = lazy(() => import("../pages/Home"))
const Salve = lazy(() => import("../components/Salve"))

function Private(Component: React.FC) {
  return <Component />
}

export const routes = [
  { children: [{ path: "/login", element: Private(Login) }] },
  {
    element: <LayoutApp />,
    children: [{ path: "/", element: Private(Home) }],
  },
  { path: "/anotacao", element: Private(Annotation) },
  { children: [{ path: "/salvo", element: Private(Salve) }] },
]
