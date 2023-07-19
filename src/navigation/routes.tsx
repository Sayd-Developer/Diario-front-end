import LayoutApp from "../layouts/LayoutHome/LayoutHome"
import { lazy } from "react"

const Login = lazy(() => import("../pages/Login"))
const Annotation = lazy(() => import("../pages/Annotation"))
const Home = lazy(() => import("../pages/Home"))
const AnnotationRegister = lazy(() => import("../pages/AnnotationRegister"))

function Private(Component: React.FC) {
  return <Component />
}

export const routes = [
  { children: [{ path: "/login", element: Private(Login) }] },
  {
    element: <LayoutApp />,
    children: [
      { path: "/", element: Private(Home) },
      { path: "/registro", element: Private(AnnotationRegister) },
    ],
  },
  { path: "/anotacao", element: Private(Annotation) },
]
