import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { lightGreen, deepOrange } from "@mui/material/colors";
import {
  Flag,
  Visibility,
  Favorite,
  CheckCircle,
  LocalFlorist,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";
import { getGlowCardSx } from "../utils/glowCard";
import storyImage from "../assets/images/hero3.jpg";

const PILLARS = [
  { key: "mission", Icon: Flag },
  { key: "vision", Icon: Visibility },
  { key: "values", Icon: Favorite },
];
const POINTS = ["point1", "point2", "point3"];

export default function AboutPage() {
  const theme = useTheme();
  const { t } = useTranslation();
  const isDark = theme.palette.mode === "dark";
  const { primary, secondary } = theme.palette;

  return (
    <Box
      component="main"
      sx={{ pt: { xs: 12, md: 16 }, pb: { xs: 6, md: 10 } }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          title={t("about.title")}
          subtitle={t("about.subtitle")}
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 7 },
            alignItems: "center",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              src={storyImage}
              alt={t("brandName")}
              loading="lazy"
              sx={{
                display: "block",
                width: "100%",
                aspectRatio: { xs: "4 / 3", md: "1 / 1" },
                objectFit: "cover",
                borderRadius: "24px",
                border: "1px solid",
                borderColor: alpha(primary.main, 0.35),
                boxShadow: `0 0 40px ${alpha(primary.main, isDark ? 0.18 : 0.25)}`,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                insetBlockEnd: 16,
                insetInlineStart: 16,
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 1,
                borderRadius: "999px",
                fontWeight: 800,
                color: "text.primary",
                bgcolor: alpha(theme.palette.background.paper, 0.75),
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <LocalFlorist sx={{ color: primary.main }} />
              <span>{t("brandName")}</span>
            </Box>
          </Box>

          <Box>
            <Typography
              component="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.5rem", md: "1.9rem" },
                mb: 2,
              }}
            >
              {t("about.story.title")}
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 2, mb: 1.5 }}>
              {t("about.story.p1")}
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 2, mb: 3 }}>
              {t("about.story.p2")}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {POINTS.map((key) => (
                <Box
                  key={key}
                  sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                >
                  <CheckCircle sx={{ color: primary.main }} />
                  <Typography sx={{ fontWeight: 600 }}>
                    {t(`about.story.points.${key}`)}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            mt: { xs: 6, md: 10 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 2, md: 3 },
          }}
        >
          {PILLARS.map(({ key, Icon }, index) => {
            const useGreen = index % 2 === 0;
            const accent = useGreen ? primary : secondary;
            const accentText = isDark
              ? accent.main
              : useGreen
                ? lightGreen[800]
                : deepOrange[700];

            return (
              <Box
                key={key}
                sx={{
                  ...getGlowCardSx(theme),
                  p: { xs: 2.5, md: 3 },
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: "16px",
                    display: "grid",
                    placeItems: "center",
                    color: accentText,
                    bgcolor: alpha(accent.main, 0.16),
                    boxShadow: `0 0 20px ${alpha(accent.main, 0.25)}`,
                  }}
                >
                  <Icon />
                </Box>
                <Typography sx={{ fontWeight: 800, fontSize: "1.15rem" }}>
                  {t(`about.pillars.${key}.title`)}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ fontSize: "0.95rem", lineHeight: 1.9 }}
                >
                  {t(`about.pillars.${key}.text`)}
                </Typography>
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            ...getGlowCardSx(theme, { interactive: false }),
            mt: { xs: 6, md: 10 },
            p: { xs: 3, md: 6 },
            textAlign: "center",
            backgroundImage: `linear-gradient(135deg, ${alpha(
              primary.main,
              isDark ? 0.2 : 0.18,
            )} 0%, ${alpha(secondary.main, isDark ? 0.14 : 0.12)} 100%)`,
          }}
        >
          <Typography
            component="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.4rem", md: "1.9rem" },
              mb: 1.5,
            }}
          >
            {t("about.cta.title")}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ maxWidth: 560, mx: "auto", lineHeight: 1.9, mb: 3 }}
          >
            {t("about.cta.text")}
          </Typography>
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
                py: 1.2,
                borderRadius: "999px",
                textTransform: "none",
                fontWeight: 800,
                boxShadow: `0 8px 24px ${alpha(primary.main, 0.4)}`,
              }}
            >
              {t("about.cta.products")}
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              variant="outlined"
              sx={{
                px: 4,
                py: 1.2,
                borderRadius: "999px",
                textTransform: "none",
                fontWeight: 800,
                color: isDark ? primary.main : lightGreen[800],
                borderColor: primary.main,
                "&:hover": {
                  borderColor: primary.main,
                  bgcolor: alpha(primary.main, 0.12),
                },
              }}
            >
              {t("about.cta.contact")}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
