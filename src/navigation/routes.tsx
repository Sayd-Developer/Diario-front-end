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

export const routes = [
  {
    element: <LayoutLogin />,
    children: [{ path: "/login", element: Private(Login) }],
  },
]
