import { Box, Container, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { lightGreen } from "@mui/material/colors";
import {
  Phone,
  WhatsApp,
  Email,
  LocationOn,
  AccessTime,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";
import ContactInfoCard from "../components/ContactInfoCard";
import RequestSection from "../components/RequestSection";
import { getGlowCardSx } from "../utils/glowCard";
import {
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
  CONTACT_EMAIL,
} from "../config/contact";

export default function ContactPage() {
  const theme = useTheme();
  const { t } = useTranslation();
  const isDark = theme.palette.mode === "dark";
  const { primary } = theme.palette;

  const address = t("contact.address.value");

  return (
    <Box component="main" sx={{ pt: { xs: 12, md: 16 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          <ContactInfoCard
            accent="primary"
            icon={<Phone />}
            label={t("contact.phone.label")}
            value={PHONE_NUMBER}
            ltrValue
            href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, "")}`}
            actionLabel={t("contact.phone.action")}
          />
          <ContactInfoCard
            accent="secondary"
            icon={<WhatsApp />}
            label={t("contact.whatsapp.label")}
            value={`+${WHATSAPP_NUMBER}`}
            ltrValue
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            external
            actionLabel={t("contact.whatsapp.action")}
          />
          <ContactInfoCard
            accent="primary"
            icon={<Email />}
            label={t("contact.email.label")}
            value={CONTACT_EMAIL}
            ltrValue
            href={`mailto:${CONTACT_EMAIL}`}
            actionLabel={t("contact.email.action")}
          />
          <ContactInfoCard
            accent="secondary"
            icon={<LocationOn />}
            label={t("contact.address.label")}
            value={address}
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
            external
            actionLabel={t("contact.address.action")}
          />
        </Box>

        <Box
          sx={{
            ...getGlowCardSx(theme, { interactive: false }),
            mt: { xs: 2, md: 3 },
            p: { xs: 2.5, md: 3 },
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 52,
              height: 52,
              flexShrink: 0,
              borderRadius: "16px",
              display: "grid",
              placeItems: "center",
              color: isDark ? primary.main : lightGreen[800],
              bgcolor: alpha(primary.main, 0.16),
              boxShadow: `0 0 20px ${alpha(primary.main, 0.25)}`,
            }}
          >
            <AccessTime />
          </Box>
          <Box>
            <Typography
              color="text.secondary"
              sx={{ fontSize: "0.85rem", fontWeight: 600 }}
            >
              {t("contact.hours.label")}
            </Typography>
            <Typography sx={{ fontWeight: 800, fontSize: "1.05rem" }}>
              {t("contact.hours.value")}
            </Typography>
          </Box>
        </Box>
      </Container>

      <RequestSection
        title={t("contact.formTitle")}
        subtitle={t("contact.formSubtitle")}
      />
    </Box>
  );
}
