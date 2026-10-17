import { Box, Typography } from "@mui/material";

export default function SectionHeading({ title, subtitle, align = "center" }) {
  const isCenter = align === "center";

  return (
    <Box
      sx={{ textAlign: isCenter ? "center" : "start", mb: { xs: 4, md: 6 } }}
    >
      <Typography
        component="h1"
        sx={{
          fontWeight: 800,
          fontSize: { xs: "1.7rem", sm: "2rem", md: "3rem" },
          lineHeight: 1.3,
          color: "primary.main",
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          width: 56,
          height: 4,
          borderRadius: 2,
          mt: 1.5,
          mx: isCenter ? "auto" : 0,
          background: (theme) =>
            `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        }}
      />

      {subtitle && (
        <Typography
          color="text.secondary"
          sx={{
            mt: 2,
            maxWidth: 620,
            mx: isCenter ? "auto" : 0,
            lineHeight: 1.8,
            fontSize: { xs: "1rem", md: "1.4rem" },
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
