import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { lightGreen } from "@mui/material/colors";
import { WhatsApp, Send } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import SectionHeading from "./SectionHeading";
import SuccessDialog from "./SuccessDialog";
import { getGlowCardSx } from "../utils/glowCard";
import { WHATSAPP_NUMBER } from "../config/contact";
import { submitPlantRequest } from "../services/requestService";

const INITIAL_VALUES = { name: "", phone: "", email: "", message: "" };
const MESSAGE_MIN = 10;
const STEPS = ["step1", "step2", "step3"];

const normalizeDigits = (str) =>
  str.replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));

function validateField(field, rawValue) {
  const value = rawValue.trim();

  switch (field) {
    case "name":
      if (!value) return "required";
      if (value.length < 2) return "nameShort";
      return "";
    case "phone": {
      if (!value) return "required";
      const normalized = normalizeDigits(value);
      const digitsCount = normalized.replace(/\D/g, "").length;
      const validChars = /^\+?[\d\s\-()]+$/.test(normalized);
      if (!validChars || digitsCount < 7 || digitsCount > 15) {
        return "phoneInvalid";
      }
      return "";
    }
    case "email":
      if (!value) return ""; 
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) ? "" : "emailInvalid";
    case "message":
      if (!value) return "required";
      if (value.length < MESSAGE_MIN) return "messageShort";
      return "";
    default:
      return "";
  }
}

function validateAll(values) {
  return Object.keys(INITIAL_VALUES).reduce((acc, field) => {
    const code = validateField(field, values[field]);
    if (code) acc[field] = code;
    return acc;
  }, {});
}

export default function RequestSection({ title, subtitle }) {
  const theme = useTheme();
  const { t } = useTranslation();
  const { language } = useSelector((state) => state.settings);
  const isAr = language === "ar";
  const isDark = theme.palette.mode === "dark";
  const { primary } = theme.palette;

  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const whatsappHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        t("request.whatsappText"),
      )}`
    : undefined;

  const handleChange = (field) => (event) => {
    const { value } = event.target;
    setValues((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  };

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, values[field]),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;

    const found = validateAll(values);
    setErrors(found);
    setTouched({ name: true, phone: true, email: true, message: true });
    if (Object.keys(found).length > 0) return;

    setSubmitError(false);
    setLoading(true);
    try {
      await submitPlantRequest({
        name: values.name.trim(),
        phone: normalizeDigits(values.phone.trim()),
        email: values.email.trim(),
        message: values.message.trim(),
      });
      setValues(INITIAL_VALUES);
      setErrors({});
      setTouched({});
      setDialogOpen(true);
    } catch {
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "14px",
      bgcolor: alpha(theme.palette.text.primary, isDark ? 0.05 : 0.03),
      transition: "background-color 0.2s ease",
      "&.Mui-focused": {
        bgcolor: alpha(primary.main, isDark ? 0.08 : 0.06),
      },
    },
  };

  const renderField = (
    field,
    { type = "text", multiline = false, fullRow = false, htmlInput = {} } = {},
  ) => (
    <TextField
      id={`request-${field}`}
      name={field}
      type={type}
      value={values[field]}
      onChange={handleChange(field)}
      onBlur={handleBlur(field)}
      placeholder={t(`request.fields.${field}`)}
      error={Boolean(errors[field])}
      helperText={
        errors[field]
          ? t(`request.errors.${errors[field]}`, { min: MESSAGE_MIN })
          : " "
      }
      disabled={loading}
      fullWidth
      multiline={multiline}
      minRows={multiline ? 4 : undefined}
      sx={{ ...inputSx, ...(fullRow && { gridColumn: "1 / -1" }) }}
      slotProps={{
        htmlInput: { "aria-label": t(`request.fields.${field}`), ...htmlInput },
        formHelperText: { sx: { textAlign: "start", mx: 0.5 } },
      }}
    />
  );

  return (
    <Box
      id="order"
      component="section"
      sx={{
        scrollMarginTop: { xs: "80px", md: "96px" },
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.1fr" },
            gap: { xs: 4, md: 7 },
            alignItems: "center",
          }}
        >
          <Box>
            <SectionHeading
              align="start"
              title={title ?? t("request.title")}
              subtitle={subtitle ?? t("request.subtitle")}
            />

            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}
            >
              {STEPS.map((key, index) => (
                <Box
                  key={key}
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      flexShrink: 0,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      fontWeight: 800,
                      bgcolor: index === 1 ? "secondary.main" : "primary.main",
                      color:
                        index === 1
                          ? "secondary.contrastText"
                          : "primary.contrastText",
                      boxShadow: `0 0 18px ${alpha(
                        index === 1
                          ? theme.palette.secondary.main
                          : primary.main,
                        0.45,
                      )}`,
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography
                    sx={{
                      lineHeight: 1.7,
                      fontSize: { xs: "1rem", sm: "1.1rem" },
                    }}
                  >
                    {t(`request.steps.${key}`)}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                ...getGlowCardSx(theme, { interactive: false }),
                p: 2.5,
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
              }}
            >
              <Typography
                sx={{ fontWeight: 800, fontSize: { xs: "1rem", sm: "1.2rem" } }}
              >
                {t("request.whatsappTitle")}
              </Typography>
              <Button
                component="a"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                disabled={!whatsappHref}
                variant="outlined"
                sx={{
                  gap: 1,
                  py: 1.1,
                  borderRadius: "14px",
                  textTransform: "none",
                  fontWeight: 800,
                  fontSize: { xs: "0.9rem", sm: "1.1rem" },
                  color: isDark ? primary.main : lightGreen[800],
                  borderColor: primary.main,
                  "&:hover": {
                    borderColor: primary.main,
                    bgcolor: alpha(primary.main, 0.12),
                  },
                }}
              >
                <WhatsApp />
                <span>{t("request.whatsappButton")}</span>
              </Button>
            </Box>
          </Box>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              ...getGlowCardSx(theme, { interactive: false }),
              p: { xs: 2.5, sm: 4 },
            }}
          >
            <Typography
              component="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.3rem", sm: "1.7rem" },
                mb: 2.5,
              }}
            >
              {t("request.formTitle")}
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                columnGap: 2,
              }}
            >
              {renderField("name", {
                htmlInput: { autoComplete: "name", maxLength: 80 },
              })}
              {renderField("phone", {
                type: "tel",
                htmlInput: {
                  dir: "ltr",
                  inputMode: "tel",
                  autoComplete: "tel",
                  maxLength: 20,
                  style: { textAlign: isAr ? "right" : "left" },
                },
              })}
              {renderField("email", {
                type: "email",
                fullRow: true,
                htmlInput: { autoComplete: "email", maxLength: 120 },
              })}
              {renderField("message", {
                multiline: true,
                fullRow: true,
                htmlInput: { maxLength: 600 },
              })}
            </Box>

            {submitError && (
              <Alert
                severity="error"
                variant="outlined"
                icon={false}
                sx={{ mb: 2, borderRadius: "12px" }}
              >
                {t("request.submitError")}
              </Alert>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              aria-busy={loading}
              sx={{
                mt: 0.5,
                py: 1.4,
                gap: 1.2,
                color: "text.primary",
                borderRadius: "14px",
                textTransform: "none",
                fontWeight: 800,
                fontSize: { xs: "1rem", sm: "1.1rem" },
                boxShadow: "none",
                pointerEvents: loading ? "none" : "auto",
                opacity: loading ? 0.9 : 1,
                "&:hover": {
                  boxShadow: `0 6px 18px ${alpha(primary.main, 0.45)}`,
                },
              }}
            >
              {loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <Send
                  sx={{
                    fontSize: "1.2rem",
                    transform: isAr ? "scaleX(-1)" : "none",
                  }}
                />
              )}
              <span>
                {loading ? t("request.sending") : t("request.submit")}
              </span>
            </Button>
          </Box>
        </Box>
      </Container>

      <SuccessDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title={t("request.success.title")}
        message={t("request.success.message")}
        buttonText={t("close")}
      />
    </Box>
  );
}
