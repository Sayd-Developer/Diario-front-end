import NavigationRoutes from "./navigation"
import { BrowserRouter } from "react-router-dom"
import { GlobalStyles } from "./styles/Globals"
function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyles />
        <NavigationRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
