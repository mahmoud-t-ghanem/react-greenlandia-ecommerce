import {
  Dialog,
  Box,
  Typography,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { lightGreen, deepOrange } from "@mui/material/colors";
import { Close, CheckRounded } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function SuccessDialog({
  open,
  onClose,
  title,
  message,
  buttonText,
  icon,
}) {
  const theme = useTheme();
  const { t } = useTranslation();
  const { language } = useSelector((state) => state.settings);
  const isAr = language === "ar";
  const isDark = theme.palette.mode === "dark";
  const { primary, secondary } = theme.palette;

  const titleGradient = isDark
    ? `linear-gradient(90deg, ${primary.main}, ${secondary.light})`
    : `linear-gradient(90deg, ${lightGreen[800]}, ${deepOrange[700]})`;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      aria-labelledby="success-dialog-title"
      aria-describedby="success-dialog-message"
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(4px)",
          },
        },
        paper: {
          dir: isAr ? "rtl" : "ltr",
          sx: {
            position: "relative",
            borderRadius: "24px",
            border: "1px solid",
            borderColor: alpha(primary.main, isDark ? 0.35 : 0.45),
            backgroundColor: isDark ? "#1a1f1a" : "#ffffff",
            backgroundImage: `linear-gradient(160deg, ${alpha(primary.main, 0.14)} 0%, ${alpha(
              isDark ? primary.main : secondary.main,
              isDark ? 0.02 : 0.06,
            )} 100%)`,
            boxShadow: `0 0 48px ${alpha(primary.main, isDark ? 0.18 : 0.25)}`,
            mx: 2,
          },
        },
      }}
    >
      <IconButton
        onClick={onClose}
        aria-label={t("close")}
        size="small"
        sx={{
          position: "absolute",
          insetBlockStart: 12,
          insetInlineEnd: 12,
          color: "text.secondary",
        }}
      >
        <Close />
      </IconButton>

      <Box sx={{ textAlign: "center", px: { xs: 3, sm: 4 }, py: 5 }}>
        <Box
          sx={{
            width: 76,
            height: 76,
            mx: "auto",
            mb: 2.5,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            color: "primary.contrastText",
            bgcolor: "primary.main",
            boxShadow: `0 0 36px ${alpha(primary.main, 0.6)}`,
          }}
        >
          {icon ?? <CheckRounded sx={{ fontSize: 44 }} />}
        </Box>

        <Typography
          id="success-dialog-title"
          component="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "1.45rem", sm: "1.7rem" },
            lineHeight: 1.6,
            mb: 1,
            background: titleGradient,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          {title}
        </Typography>

        <Typography
          id="success-dialog-message"
          color="text.secondary"
          sx={{ lineHeight: 1.9, mb: 3.5 }}
        >
          {message}
        </Typography>

        <Button
          variant="contained"
          onClick={onClose}
          sx={{
            minWidth: 150,
            py: 1.1,
            borderRadius: "14px",
            textTransform: "none",
            fontWeight: 800,
            boxShadow: "none",
            "&:hover": { boxShadow: `0 6px 18px ${alpha(primary.main, 0.45)}` },
          }}
        >
          {buttonText ?? t("close")}
        </Button>
      </Box>
    </Dialog>
  );
}
