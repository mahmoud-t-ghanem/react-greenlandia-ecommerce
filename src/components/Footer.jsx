import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { lightGreen } from "@mui/material/colors";
import {
  LocalFlorist,
  Phone,
  WhatsApp,
  Email,
  LocationOn,
  AccessTime,
  Instagram,
  Facebook,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
  CONTACT_EMAIL,
  SOCIAL_LINKS,
} from "../config/contact";

const QUICK_LINKS = [
  { to: "/", key: "home" },
  { to: "/products", key: "products" },
  { to: "/about", key: "about" },
  { to: "/contact", key: "contact" },
];

function ColumnTitle({ children }) {
  return (
    <Box sx={{ mb: 2.5 }}>
      <Typography component="h3" sx={{ fontWeight: 800, fontSize: "1.05rem" }}>
        {children}
      </Typography>
      <Box
        sx={{
          width: 32,
          height: 3,
          borderRadius: 2,
          mt: 1,
          background: (theme) =>
            `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        }}
      />
    </Box>
  );
}

function FooterRow({ icon, href, external = false, children }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const hover = isDark ? theme.palette.primary.main : lightGreen[800];

  const content = (
    <>
      <Box
        component="span"
        sx={{ display: "inline-flex", color: "primary.main", mt: "3px" }}
      >
        {icon}
      </Box>
      <Box component="span" sx={{ lineHeight: 1.8 }}>
        {children}
      </Box>
    </>
  );

  const rowSx = {
    display: "flex",
    alignItems: "flex-start",
    gap: 1.5,
    color: "text.secondary",
    fontSize: "0.92rem",
    textDecoration: "none",
  };

  if (!href) return <Box sx={rowSx}>{content}</Box>;

  return (
    <Box
      component="a"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      sx={{
        ...rowSx,
        transition: "color 0.2s ease",
        "&:hover": { color: hover },
      }}
    >
      {content}
    </Box>
  );
}

export default function Footer() {
  const theme = useTheme();
  const { t } = useTranslation();
  const isDark = theme.palette.mode === "dark";
  const { primary } = theme.palette;
  const hover = isDark ? primary.main : lightGreen[800];

  const year = new Date().getFullYear();
  const address = t("contact.address.value");

  const socials = [
    { key: "instagram", Icon: Instagram, href: SOCIAL_LINKS.instagram },
    { key: "facebook", Icon: Facebook, href: SOCIAL_LINKS.facebook },
  ].filter((item) => item.href);

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto", 
        borderTop: "1px solid",
        borderColor: alpha(primary.main, isDark ? 0.25 : 0.3),
        bgcolor: isDark ? "background.paper" : alpha(primary.main, 0.07),
        backgroundImage: `radial-gradient(ellipse 60% 100% at 50% 0%, ${alpha(
          primary.main,
          isDark ? 0.12 : 0.14,
        )} 0%, transparent 70%)`,
      }}
    >
      <Container maxWidth="lg" sx={{ pt: { xs: 5, md: 7 }, pb: 3 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              lg: "1.5fr 1fr 1.5fr",
            },
            gap: { xs: 4, md: 5 },
          }}
        >
          <Box sx={{ gridColumn: { sm: "1 / -1", lg: "auto" } }}>
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                color: "text.primary",
                textDecoration: "none",
                mb: 2,
              }}
            >
              <LocalFlorist sx={{ color: primary.main, fontSize: "2.2rem" }} />
              <Typography sx={{ fontWeight: 800, fontSize: "1.45rem" }}>
                {t("brandName")}
              </Typography>
            </Box>

            <Typography
              color="text.secondary"
              sx={{ maxWidth: 380, lineHeight: 1.9, fontSize: "0.92rem" }}
            >
              {t("footer.description")}
            </Typography>

            {socials.length > 0 && (
              <Box sx={{ display: "flex", gap: 1.25, mt: 2.5 }}>
                {socials.map(({ key, Icon, href }) => (
                  <IconButton
                    key={key}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    sx={{
                      width: 42,
                      height: 42,
                      color: hover,
                      border: "1px solid",
                      borderColor: alpha(primary.main, 0.35),
                      bgcolor: alpha(primary.main, 0.1),
                      transition: "all 0.25s ease",
                      "&:hover": {
                        bgcolor: alpha(primary.main, 0.2),
                        borderColor: primary.main,
                        boxShadow: `0 0 18px ${alpha(primary.main, 0.4)}`,
                      },
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                ))}
              </Box>
            )}
          </Box>

          <Box>
            <ColumnTitle>{t("footer.quickLinks")}</ColumnTitle>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {QUICK_LINKS.map(({ to, key }) => (
                <Box
                  key={key}
                  component={RouterLink}
                  to={to}
                  sx={{
                    alignSelf: "flex-start",
                    color: "text.secondary",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    paddingInlineStart: 0,
                    transition: "color 0.2s ease, padding 0.2s ease",
                    "&:hover": { color: hover, paddingInlineStart: "6px" },
                  }}
                >
                  {t(`footer.links.${key}`)}
                </Box>
              ))}
            </Box>
          </Box>

          <Box>
            <ColumnTitle>{t("footer.contactTitle")}</ColumnTitle>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.75 }}>
              <FooterRow
                icon={<Phone fontSize="small" />}
                href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, "")}`}
              >
                <Box component="span" dir="ltr" sx={{ unicodeBidi: "isolate" }}>
                  {PHONE_NUMBER}
                </Box>
              </FooterRow>

              <FooterRow
                icon={<WhatsApp fontSize="small" />}
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                external
              >
                <Box component="span" dir="ltr" sx={{ unicodeBidi: "isolate" }}>
                  {`+${WHATSAPP_NUMBER}`}
                </Box>
              </FooterRow>

              <FooterRow
                icon={<Email fontSize="small" />}
                href={`mailto:${CONTACT_EMAIL}`}
              >
                <Box component="span" dir="ltr" sx={{ unicodeBidi: "isolate" }}>
                  {CONTACT_EMAIL}
                </Box>
              </FooterRow>

              <FooterRow
                icon={<LocationOn fontSize="small" />}
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                external
              >
                {address}
              </FooterRow>

              <FooterRow icon={<AccessTime fontSize="small" />}>
                {t("contact.hours.value")}
              </FooterRow>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ mt: { xs: 4, md: 5 }, mb: 2.5 }} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography color="text.secondary" sx={{ fontSize: "0.85rem" }}>
            {t("footer.rights", { year, brand: t("brandName") })}
          </Typography>

          <IconButton
            aria-label={t("footer.backToTop")}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{
              width: 42,
              height: 42,
              color: "primary.contrastText",
              bgcolor: "primary.main",
              boxShadow: `0 6px 18px ${alpha(primary.main, 0.4)}`,
              "&:hover": {
                bgcolor: "primary.main",
                boxShadow: `0 8px 24px ${alpha(primary.main, 0.6)}`,
              },
            }}
          >
            <KeyboardArrowUp />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
