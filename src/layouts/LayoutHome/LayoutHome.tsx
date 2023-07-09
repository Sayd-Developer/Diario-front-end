import Sidebar from "../../components/Sidebar";
import Home from "../../pages/Home";
import { TemplateHome } from "./styles";

export default function LayoutHome() {
  return (
    <TemplateHome>
      <Sidebar />
      <Home />
    </TemplateHome>
  );
}
