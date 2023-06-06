import LayoutAnnotation from "../layouts/LayoutAnnotation"
import LayoutHome from "../layouts/LayoutHome"
import LayoutLogin from "../layouts/LayoutLogin"
import { lazy } from "react"

function Private(Component: React.FC) {
  const verify = false

  return <Component />

  // return verify ? <Component /> : <Login />;
}

function VerifyLayout(Component: React.FC) {
  const verify = true

  return verify ? <Component /> : <LayoutLogin />
}

const Login = lazy(() => import("../pages/Login"))
const Annotation = lazy(() => import("../pages/Annotation"))
const Home = lazy(() => import("../pages/Home"))

export const routes = [
  {
    element: <LayoutLogin />,
    children: [{ path: "/login", element: Private(Login) }],
  },
  {
    element: <LayoutHome />,
    children: [{ path: "/inicio", element: Private(Home) }],
  },
  {
    element: <LayoutAnnotation />,
    children: [{ path: "/Anotacao", element: Private(Annotation) }],
  },
]
