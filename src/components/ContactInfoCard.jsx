import { Box, Button, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { lightGreen, deepOrange } from "@mui/material/colors";
import { getGlowCardSx } from "../utils/glowCard";

export default function ContactInfoCard({
  icon,
  label,
  value,
  ltrValue = false,
  href,
  actionLabel,
  external = false,
  accent = "primary",
}) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const color = theme.palette[accent];
  const accentText = isDark
    ? color.main
    : accent === "primary"
      ? lightGreen[800]
      : deepOrange[700];

  return (
    <Box
      sx={{
        ...getGlowCardSx(theme),
        p: { xs: 2.5, md: 3 },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 1.25,
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
          bgcolor: alpha(color.main, 0.16),
          boxShadow: `0 0 20px ${alpha(color.main, 0.25)}`,
        }}
      >
        {icon}
      </Box>

      <Typography
        color="text.secondary"
        sx={{ fontSize: "0.85rem", fontWeight: 600 }}
      >
        {label}
      </Typography>

      <Typography
        component="div"
        sx={{
          fontWeight: 800,
          fontSize: "1.05rem",
          lineHeight: 1.7,
          wordBreak: "break-word",
        }}
      >
        {ltrValue ? (
          <Box component="span" dir="ltr" sx={{ unicodeBidi: "isolate" }}>
            {value}
          </Box>
        ) : (
          value
        )}
      </Typography>

      {href && (
        <Button
          component="a"
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          variant="outlined"
          sx={{
            mt: "auto",
            alignSelf: "flex-start",
            px: 2.5,
            py: 0.8,
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: 700,
            color: accentText,
            borderColor: color.main,
            "&:hover": {
              borderColor: color.main,
              bgcolor: alpha(color.main, 0.12),
            },
          }}
        >
          {actionLabel}
        </Button>
      )}
    </Box>
  );
}
