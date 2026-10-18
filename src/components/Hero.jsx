import { Box, Container, Typography, Button } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { lightGreen } from "@mui/material/colors";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import heroImage from "../../public/hero.webp";
import SearchField from "./SearchField";
import { scrollToSection } from "../utils/scroll";

export default function Hero({ searchQuery = "", setSearchQuery = () => {} }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: { xs: "88vh", md: "78vh" },
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        px: 2,
        pt: { xs: 11, md: 10 },
        pb: { xs: 6, md: 8 },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 2.5, md: 3 },
          mt: 4,
        }}
      >
        <Box
          sx={{
            px: 2,
            py: 0.6,
            borderRadius: "999px",
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
            fontWeight: 600,
            color: lightGreen[100],
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.2),
            border: "1px solid",
            borderColor: (theme) => alpha(theme.palette.primary.main, 0.5),
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          {t("home.hero.badge")}
        </Box>

        <Typography
          component="h1"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2rem", sm: "2.8rem", md: "3.6rem" },
            lineHeight: 1.3,
            textShadow: "0 2px 18px rgba(0,0,0,0.45)",
          }}
        >
          {t("home.hero.title")}
        </Typography>

        <Typography
          sx={{
            maxWidth: 640,
            color: alpha("#fff", 0.88),
            fontSize: { xs: "1rem", md: "1.15rem" },
            lineHeight: 1.9,
          }}
        >
          {t("home.hero.subtitle")}
        </Typography>

        <SearchField
          variant="glass"
          value={searchQuery}
          onChange={setSearchQuery}
          onEnter={() => navigate("/products")}
          placeholder={t("searchPlaceholder")}
        />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 1.5,
          }}
        >
          <Button
            component={RouterLink}
            to="/products"
            variant="contained"
            sx={{
              px: 4,
              py: 1.3,
              color: "text.primary",
              borderRadius: "999px",
              textTransform: "none",
              fontWeight: 800,
              fontSize: "1rem",
              boxShadow: (theme) =>
                `0 8px 24px ${alpha(theme.palette.primary.main, 0.45)}`,
            }}
          >
            {t("home.hero.shopNow")}
          </Button>
          <Button
            variant="outlined"
            onClick={() => scrollToSection("order")}
            sx={{
              px: 4,
              py: 1.3,
              borderRadius: "999px",
              textTransform: "none",
              fontWeight: 800,
              fontSize: "1rem",
              color: "#fff",
              borderColor: alpha("#fff", 0.6),
              "&:hover": {
                borderColor: "#fff",
                bgcolor: alpha("#fff", 0.12),
              },
            }}
          >
            {t("home.hero.orderNow")}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
