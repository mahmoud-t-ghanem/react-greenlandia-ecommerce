import { Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";
import SearchField from "../components/SearchField";
import ProductsSection from "../components/ProductsSection";

export default function ProductsPage({ searchQuery, setSearchQuery }) {
  const { t } = useTranslation();

  return (
    <Box
      component="main"
      sx={{
        pt: { xs: 12, md: 16 },
        pb: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          title={t("productsPage.title")}
          subtitle={t("productsPage.subtitle")}
        />
        <Box sx={{ display: "flex", justifyContent: "center", mb: 7 }}>
          <SearchField
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={t("searchPlaceholder")}
          />
        </Box>
      </Container>

      <ProductsSection searchQuery={searchQuery} />
    </Box>
  );
}
