import { alpha } from "@mui/material/styles";


export function getGlowCardSx(theme, { interactive = true } = {}) {
  const isDark = theme.palette.mode === "dark";
  const { primary, secondary } = theme.palette;

  return {
    position: "relative",
    borderRadius: { xs: "20px", sm: "24px" },
    border: "1px solid",
    borderColor: alpha(primary.main, isDark ? 0.22 : 0.35),
    backgroundColor: isDark ? "#1a1f1a" : "#ffffff",
    backgroundImage: isDark
      ? `linear-gradient(160deg, ${alpha(primary.main, 0.12)} 0%, ${alpha(primary.main, 0.02)} 70%)`
      : `linear-gradient(160deg, ${alpha(primary.main, 0.12)} 0%, ${alpha(secondary.main, 0.06)} 100%)`,
    boxShadow: isDark
      ? `0 0 28px ${alpha(primary.main, 0.07)}`
      : `0 10px 30px ${alpha(theme.palette.common.black, 0.06)}`,
    transition:
      "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
    ...(interactive && {
      "&:hover": {
        transform: "translateY(-5px)",
        borderColor: primary.main,
        boxShadow: `0 14px 32px ${alpha(primary.main, isDark ? 0.22 : 0.28)}`,
      },
    }),
  };
}
