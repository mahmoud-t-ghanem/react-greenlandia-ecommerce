import { Box, Button, Container } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import SectionHeading from "../components/SectionHeading";
import ProductsSection from "../components/ProductsSection";
import RequestSection from "../components/RequestSection";

const PREVIEW_COUNT = 8;

export default function HomePage({ searchQuery, setSearchQuery }) {
  const { t } = useTranslation();
  const { mode, language } = useSelector((state) => state.settings);
  const isAr = language === "ar";
  const isDark = mode === "dark";
  const Arrow = isAr ? ArrowBack : ArrowForward;

  return (
    <Box component="main">
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <FeaturesSection />

      <Box component="section" sx={{ py: { xs: 3, md: 6 } }}>
        <Container maxWidth="lg">
          <SectionHeading
            title={t("home.products.title")}
            subtitle={t("home.products.subtitle")}
          />
        </Container>

        <ProductsSection limit={PREVIEW_COUNT} />

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            component={RouterLink}
            to="/products"
            variant="outlined"
            sx={{
              gap: 1,
              px: 4,
              py: 1.2,
              borderRadius: "999px",
              textTransform: "none",
              fontWeight: 800,
              fontSize: { xs: "1rem", sm: "1.2rem" },
              color: isDark ? "primary.main" : lightGreen[800],
              borderColor: "primary.main",
              "&:hover": {
                borderColor: "primary.main",
                bgcolor: "primary.main",
                color: "text.primary",
              },
            }}
          >
            <span>{t("home.products.seeMore")}</span>
            <Arrow sx={{ fontSize: "1.2rem" }} />
          </Button>
        </Box>
      </Box>

      <RequestSection />
    </Box>
  );
}
