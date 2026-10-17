import { Box, InputBase } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Search } from "@mui/icons-material";

export default function SearchField({
  value,
  onChange,
  onEnter,
  placeholder,
  variant = "default",
}) {
  const glass = variant === "glass";

  return (
    <Box
      sx={(theme) => {
        const isDark = theme.palette.mode === "dark";
        const main = theme.palette.primary.main;
        return {
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          width: "100%",
          maxWidth: 560,
          height: 56,
          px: 2.5,
          borderRadius: "999px",
          border: "1px solid",
          borderColor: glass
            ? alpha("#fff", 0.35)
            : alpha(main, isDark ? 0.3 : 0.4),
          bgcolor: glass
            ? alpha("#fff", 0.14)
            : alpha(theme.palette.text.primary, isDark ? 0.05 : 0.03),
          backdropFilter: glass ? "blur(10px)" : "none",
          WebkitBackdropFilter: glass ? "blur(10px)" : "none",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          "&:focus-within": {
            borderColor: main,
            boxShadow: `0 0 0 3px ${alpha(main, 0.3)}`,
          },
        };
      }}
    >
      <Search sx={{ color: glass ? alpha("#fff", 0.85) : "text.secondary" }} />
      <InputBase
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onEnter?.();
        }}
        placeholder={placeholder}
        slotProps={{
          input: { "aria-label": placeholder, enterKeyHint: "search" },
        }}
        sx={{
          color: glass ? "#fff" : "text.primary",
          fontSize: "1rem",
          "& input::placeholder": {
            color: glass ? alpha("#fff", 0.75) : "text.secondary",
            opacity: 1,
          },
        }}
      />
    </Box>
  );
}
