import { Box, Container, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { lightGreen, deepOrange } from "@mui/material/colors";
import {
  Spa,
  TipsAndUpdates,
  LocalShipping,
  WhatsApp,
  Sell,
  WaterDrop,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";
import { getGlowCardSx } from "../utils/glowCard";

const FEATURES = [
  { key: "quality", Icon: Spa },
  { key: "care", Icon: TipsAndUpdates },
  { key: "packaging", Icon: LocalShipping },
  { key: "whatsapp", Icon: WhatsApp },
  { key: "prices", Icon: Sell },
  { key: "custom", Icon: WaterDrop },
];

export default function FeaturesSection() {
  const theme = useTheme();
  const { t } = useTranslation();
  const isDark = theme.palette.mode === "dark";
  const { primary, secondary } = theme.palette;

  return (
    <Box
      id="features"
      component="section"
      sx={{
        scrollMarginTop: { xs: "80px", md: "96px" },
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          title={t("home.features.title")}
          subtitle={t("home.features.subtitle")}
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 2, md: 5 },
          }}
        >
          {FEATURES.map(({ key, Icon }, index) => {
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

                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.7rem" },
                  }}
                >
                  {t(`home.features.items.${key}.title`)}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    lineHeight: 1.8,
                  }}
                >
                  {t(`home.features.items.${key}.text`)}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
