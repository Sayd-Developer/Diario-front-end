import NavigationRoutes from "./navigation"
import Themes from "../src/Theme/Themes"
import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"
import { GlobalStyles } from "./styles/Globals"
function App() {
  return (
    <div>
      <ThemeProvider theme={Themes}>
        <BrowserRouter>
          <GlobalStyles />
          <NavigationRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
