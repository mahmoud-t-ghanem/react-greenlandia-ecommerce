// import { useMemo } from "react";
// import { Drawer, Box, useTheme } from "@mui/material";
// import { ThemeProvider, alpha } from "@mui/material/styles";
// import { useSelector } from "react-redux";

// const DRAWER_WIDTH = { xs: "94vw", sm: 500 };

// export default function SideDrawer({ open, onClose, children }) {
//   const theme = useTheme();
//   const { language } = useSelector((state) => state.settings);
//   const isArabic = language === "ar";

//   const drawerTheme = useMemo(() => ({ ...theme, direction: "ltr" }), [theme]);

//   const anchor = isArabic ? "left" : "right";

//   return (
//     <ThemeProvider theme={drawerTheme}>
//       <Drawer
//         anchor={anchor}
//         open={open}
//         onClose={onClose}
//         disableScrollLock={true}
//         sx={{
//           "& .MuiDrawer-paper": {
//             width: DRAWER_WIDTH,
//             maxWidth: "100vw",
//             height: "100%",
//             boxSizing: "border-box",
//             borderRadius: isArabic ? "0 24px 24px 0" : "24px 0 0 24px",
//             overflow: "hidden",
//             border: "1px solid",
//             borderColor: (theme) => alpha(theme.palette.primary.main, 0.25),
//           },
//         }}
//       >
//         <Box
//           dir={isArabic ? "rtl" : "ltr"}
//           sx={{
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             flexDirection: "column",
//             px: { xs: 2.5, sm: 3.5 },
//             py: 3,
//           }}
//         >
//           {children}
//         </Box>
//       </Drawer>
//     </ThemeProvider>
//   );
// }

import { useMemo } from "react";
import { Drawer, Box, useTheme } from "@mui/material";
import { ThemeProvider, alpha } from "@mui/material/styles";
import { useSelector } from "react-redux";

const DRAWER_WIDTH = { xs: "94vw", sm: 500 };

export default function SideDrawer({ open, onClose, children }) {
  const theme = useTheme();
  const { language } = useSelector((state) => state.settings);
  const isArabic = language === "ar";

  const drawerTheme = useMemo(() => ({ ...theme, direction: "ltr" }), [theme]);

  const anchor = isArabic ? "left" : "right";

  return (
    <ThemeProvider theme={drawerTheme}>
      <Drawer
        anchor={anchor}
        open={open}
        onClose={onClose}
        disableScrollLock={true}
        sx={{
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            maxWidth: "100vw",
            height: "100%",
            maxHeight: "100dvh",
            boxSizing: "border-box",
            borderRadius: isArabic ? "0 24px 24px 0" : "24px 0 0 24px",
            overflow: "hidden", // لتبقى الزوايا المدورة سليمة، والسكرول بالـ Box الداخلي
            border: "1px solid",
            borderColor: (theme) => alpha(theme.palette.primary.main, 0.25),
          },
        }}
      >
        <Box
          dir={isArabic ? "rtl" : "ltr"}
          sx={{
            width: "100%",
            height: "100%",
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
            // سكرول عمودي لما المحتوى يزيد عن ارتفاع الشاشة (مثل الموبايل بالعرض)
            overflowY: "auto",
            overscrollBehavior: "contain",
            scrollbarWidth: "thin",
            scrollbarColor: (theme) =>
              `${alpha(theme.palette.primary.main, 0.45)} transparent`,
            px: { xs: 2.5, sm: 3.5 },
            py: 3,
          }}
        >
          {children}
        </Box>
      </Drawer>
    </ThemeProvider>
  );
}