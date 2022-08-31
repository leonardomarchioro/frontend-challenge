import { DefaultTheme, ThemeProvider } from "styled-components";
import { lightTheme } from "./themeColors";

const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme: DefaultTheme = { ...lightTheme };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
