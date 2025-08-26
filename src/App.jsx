import { PageTailwind } from "./components/tailwindcss/pageTailwind";
import { CartProvider } from "./context/useCartContext";
import { ThemeProvider } from "./context/useThemeContext";

export function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <PageTailwind />
      </CartProvider>
    </ThemeProvider>
  );
}
