import { useRoutes } from "react-router-dom"
import { routes } from "./routes"

export default function NavigationRoutes() {
  return useRoutes(routes)
}
