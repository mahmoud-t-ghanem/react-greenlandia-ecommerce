

import { useMemo, useEffect, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getCustomTheme } from "./theme/theme";

import Navbar from "./components/Navbar";
import ScrollManager from "./components/ScrollManager";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

const ROUTE_BY_VIEW = {
  home: "/",
  products: "/products",
  about: "/about",
  contact: "/contact",
};

function getCurrentView({ pathname }) {
  if (pathname.startsWith("/products")) return "products";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/contact")) return "contact";
  return "home";
}

export default function App() {
  const { i18n } = useTranslation();
  const { mode, language } = useSelector((state) => state.settings);
  const direction = language === "ar" ? "rtl" : "ltr";
  const theme = useMemo(
    () => getCustomTheme(mode, direction),
    [mode, direction],
  );

  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
    document.documentElement.lang = language;
  }, [language, i18n]);

  const currentView = getCurrentView(location);
  const handleNavigate = (view) => navigate(ROUTE_BY_VIEW[view] ?? "/");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        dir={direction}
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ScrollManager />

        <Navbar
          currentView={currentView}
          setCurrentView={handleNavigate}
          transparentAtTop={location.pathname === "/"}
        />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            }
          />
          <Route
            path="/products"
            element={
              <ProductsPage
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
