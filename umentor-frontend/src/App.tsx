import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import AppRoutes from "./routes/AppRoutes";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
      <GlobalStyles />
    </BrowserRouter>
  )
}


