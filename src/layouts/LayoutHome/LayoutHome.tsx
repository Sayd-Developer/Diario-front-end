import Sidebar from "../../components/Sidebar"
import { TemplateHome } from "./styles"
import { Outlet } from "react-router-dom"

export default function LayoutApp() {
  return (
    <TemplateHome>
      <Sidebar />
      <Outlet />
    </TemplateHome>
  )
}
