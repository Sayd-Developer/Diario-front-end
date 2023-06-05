import NavigationRoutes from "./navigation"
import { BrowserRouter } from "react-router-dom"
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
