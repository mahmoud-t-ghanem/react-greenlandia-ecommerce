import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  Button,
  List,
  ListItemButton,
  Divider,
  MenuItem,
  MenuList,
  Popper,
  Paper,
  ClickAwayListener,
  Fade,
  Switch,
  Stack,
  useTheme,
  useScrollTrigger,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import {
  ShoppingCart,
  Favorite,
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
  Close,
  LocalFlorist,
  KeyboardArrowDown,
  Language,
  Home,
  Storefront,
  Info,
  ContactSupport,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, setLanguage } from "../features/settingsSlice";
import { useTranslation } from "react-i18next";
import SideDrawer from "./SideDrawer";
import CartDrawer from "./CartDrawer";
import FavoritesDrawer from "./FavoritesDrawer";

const LANGUAGES = [
  { code: "ar", label: "العربية" },
  { code: "en", label: "English" },
];

export default function Navbar({
  currentView,
  setCurrentView,
  transparentAtTop = true,
}) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const { mode, language } = useSelector((state) => state.settings);
  const cartItems = useSelector((state) => state.cart.items);
  const favoriteItems = useSelector((state) => state.favorites.items);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  const [langAnchorEl, setLangAnchorEl] = useState(null);
  const [langMenuWidth, setLangMenuWidth] = useState(140);
  const isLangMenuOpen = Boolean(langAnchorEl);

  const isArabic = language === "ar";
  const isDark = theme.palette.mode === "dark";
  const primary = theme.palette.primary.main;


  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 40 });

  const solid = scrolled || !transparentAtTop;
  const fg = solid ? theme.palette.text.primary : "#fff";

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const iconButtonSx = {
    width: { xs: 40, sm: 44 },
    height: { xs: 40, sm: 44 },
    color: fg,
    transition: "background-color 0.2s ease, color 0.3s ease",
    "&:hover": { bgcolor: alpha(fg, 0.12) },
    "& .MuiSvgIcon-root": { fontSize: { xs: "1.4rem", sm: "1.5rem" } },
  };

  const handleOpenLangMenu = (event) => {
    setLangMenuWidth(event.currentTarget.getBoundingClientRect().width);
    setLangAnchorEl(event.currentTarget);
  };

  const handleCloseLangMenu = () => {
    setLangAnchorEl(null);
  };

  const handleLangClickAway = (event) => {
    if (langAnchorEl && langAnchorEl.contains(event.target)) return;
    handleCloseLangMenu();
  };

  const handleLangKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      handleCloseLangMenu();
    } else if (event.key === "Escape") {
      handleCloseLangMenu();
    }
  };

  const handleSelectLanguage = (newLang) => {
    dispatch(setLanguage(newLang));
    i18n.changeLanguage(newLang);
    handleCloseLangMenu();
  };

  const handleToggleLanguageSwitch = (event) => {
    const newLang = event.target.checked ? "en" : "ar";
    setMobileOpen(false);
    setTimeout(() => {
      dispatch(setLanguage(newLang));
      i18n.changeLanguage(newLang);
    }, 300);
  };

  const handleToggleThemeSwitch = () => {
    dispatch(toggleTheme());
  };

  const navLinks = [
    { key: "home", labelAr: "الرئيسية", labelEn: "Home", icon: <Home /> },
    {
      key: "products",
      labelAr: "المنتجات",
      labelEn: "Products",
      icon: <Storefront />,
    },
    { key: "about", labelAr: "من نحن", labelEn: "About", icon: <Info /> },
    {
      key: "contact",
      labelAr: "اتصل بنا",
      labelEn: "Contact",
      icon: <ContactSupport />,
    },
  ];

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        color: fg,
        backgroundImage: "none",
        backgroundColor: solid
          ? alpha(theme.palette.background.paper, isDark ? 0.82 : 0.88)
          : "transparent",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid",
        borderColor: solid ? "divider" : "rgba(255,255,255,0.15)",
        boxShadow: solid
          ? `0 4px 24px ${alpha("#000", isDark ? 0.45 : 0.08)}`
          : "none",
        transition:
          "background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, color 0.3s ease",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr auto", lg: "1fr auto 1fr" },
          alignItems: "center",
          columnGap: 2,
          px: { xs: 1.5, sm: 3, lg: 5 },
          minHeight: solid
            ? { xs: 60, sm: 64, lg: 72 }
            : { xs: 68, sm: 76, lg: 88 },
          transition: "min-height 0.3s ease",
        }}
      >
        <Box
          onClick={() => setCurrentView("home")}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
            justifySelf: "start",
            minWidth: 0,
          }}
        >
          <LocalFlorist
            sx={{
              color: primary,
              fontSize: { xs: "1.75rem", sm: "2rem", lg: "2.2rem" },
            }}
          />
          <Typography
            variant="h6"
            component="div"
            noWrap
            sx={{
              fontWeight: "bold",
              color: fg,
              fontSize: { xs: "1.15rem", sm: "1.3rem", lg: "1.45rem" },
              letterSpacing: "0.5px",
              transition: "color 0.3s ease",
            }}
          >
            {t("brandName")}
          </Typography>
        </Box>

        <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 3 }}>
          {navLinks.map((link) => {
            const active = currentView === link.key;
            return (
              <Button
                key={link.key}
                onClick={() => setCurrentView(link.key)}
                sx={{
                  color: fg,
                  fontSize: "1rem",
                  fontWeight: active ? "bold" : "normal",
                  borderBottom: "2px solid",
                  borderColor: active ? primary : "transparent",
                  borderRadius: 0,
                  pb: 0.5,
                  transition: "color 0.2s ease, border-color 0.2s ease",
                  "&:hover": { bgcolor: "transparent", color: primary },
                }}
              >
                {isArabic ? link.labelAr : link.labelEn}
              </Button>
            );
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifySelf: "end",
            gap: { xs: 0.5, sm: 1 },
          }}
        >
          <Button
            onClick={isLangMenuOpen ? handleCloseLangMenu : handleOpenLangMenu}
            aria-haspopup="true"
            aria-expanded={isLangMenuOpen}
            sx={{
              display: { xs: "none", lg: "flex" },
              height: 44,
              minWidth: 140,
              px: 1.75,
              gap: 1.2,
              justifyContent: "space-between",
              color: fg,
              border: "1px solid",
              borderColor: solid ? alpha(fg, 0.3) : "rgba(255,255,255,0.35)",
              borderRadius: 2,
              textTransform: "none",
              fontSize: "0.9rem",
              transition: "border-color 0.2s ease, color 0.3s ease",
              "&:hover": { borderColor: primary, bgcolor: alpha(fg, 0.08) },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Language sx={{ color: primary, fontSize: "1.2rem" }} />
              <span>{isArabic ? "العربية" : "English"}</span>
            </Box>
            <KeyboardArrowDown
              sx={{
                fontSize: "1.2rem",
                transition: "transform 0.2s ease",
                transform: isLangMenuOpen ? "rotate(180deg)" : "none",
              }}
            />
          </Button>

          <Popper
            open={isLangMenuOpen}
            anchorEl={langAnchorEl}
            placement="bottom-start"
            transition
            modifiers={[{ name: "offset", options: { offset: [0, 8] } }]}
            sx={{ zIndex: theme.zIndex.appBar + 2 }}
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={150}>
                <Paper
                  dir={isArabic ? "rtl" : "ltr"}
                  elevation={0}
                  sx={{
                    width: langMenuWidth,
                    borderRadius: 2,
                    backgroundColor: "background.paper",
                    backgroundImage: "none",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(139, 195, 74, 0.35)",
                    boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.25)",
                    overflow: "hidden",
                  }}
                >
                  <ClickAwayListener onClickAway={handleLangClickAway}>
                    <MenuList
                      autoFocusItem={isLangMenuOpen}
                      onKeyDown={handleLangKeyDown}
                      sx={{ p: 1 }}
                    >
                      {LANGUAGES.map((lang) => (
                        <MenuItem
                          key={lang.code}
                          selected={language === lang.code}
                          onClick={() => handleSelectLanguage(lang.code)}
                          sx={{
                            color: "primary.main",
                            fontWeight:
                              language === lang.code ? "bold" : "normal",
                            fontSize: "0.9rem",
                            justifyContent: "flex-start",
                            borderRadius: 1.5,
                            px: 2,
                            py: 1.2,
                            "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
                            "&.Mui-selected": {
                              bgcolor: "rgba(139, 195, 74, 0.28)",
                            },
                            "&.Mui-selected:hover": {
                              bgcolor: "rgba(139, 195, 74, 0.38)",
                            },
                          }}
                        >
                          {lang.label}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Fade>
            )}
          </Popper>

          <IconButton
            aria-label={isArabic ? "تبديل المظهر" : "Toggle theme"}
            onClick={() => dispatch(toggleTheme())}
            sx={{ ...iconButtonSx, display: { xs: "none", lg: "inline-flex" } }}
          >
            {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          <IconButton
            aria-label={isArabic ? "المفضلة" : "Favorites"}
            onClick={() => setIsFavoritesOpen(true)}
            sx={iconButtonSx}
          >
            <Badge
              badgeContent={favoriteItems.length}
              color="secondary"
              max={99}
            >
              <Favorite />
            </Badge>
          </IconButton>

          <IconButton
            aria-label={isArabic ? "سلة المشتريات" : "Shopping cart"}
            onClick={() => setIsCartOpen(true)}
            sx={iconButtonSx}
          >
            <Badge badgeContent={cartCount} color="secondary" max={99}>
              <ShoppingCart />
            </Badge>
          </IconButton>

          <IconButton
            aria-label={isArabic ? "القائمة" : "Menu"}
            onClick={() => setMobileOpen(true)}
            sx={{ ...iconButtonSx, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <SideDrawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2.5,
          }}
        >
          <Box
            onClick={() => {
              setCurrentView("home");
              setMobileOpen(false);
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              cursor: "pointer",
            }}
          >
            <LocalFlorist sx={{ color: "#8bc34a", fontSize: "2rem" }} />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
            >
              {t("brandName")}
            </Typography>
          </Box>
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{
              bgcolor: "action.hover",
              "&:hover": { bgcolor: "action.selected" },
            }}
          >
            <Close />
          </IconButton>
        </Box>

        <Divider />

        <List
          sx={{
            my: 2.5,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            p: 0,
          }}
        >
          {navLinks.map((link) => {
            const active = currentView === link.key;
            return (
              <ListItemButton
                key={link.key}
                onClick={() => {
                  setCurrentView(link.key);
                  setMobileOpen(false);
                }}
                sx={{
                  borderRadius: 3,
                  bgcolor: active ? "rgba(139, 195, 74, 0.15)" : "transparent",
                  px: 2.5,
                  py: 1.8,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  transition: "background-color 0.2s ease",
                  "&:hover": {
                    bgcolor: active
                      ? "rgba(139, 195, 74, 0.22)"
                      : "action.hover",
                  },
                }}
              >
                <Box
                  sx={{
                    color: active ? "#8bc34a" : "text.secondary",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {link.icon}
                </Box>
                <Typography
                  sx={{
                    fontSize: "1.05rem",
                    fontWeight: active ? "bold" : "medium",
                    color: active ? "#8bc34a" : "text.primary",
                  }}
                >
                  {isArabic ? link.labelAr : link.labelEn}
                </Typography>
              </ListItemButton>
            );
          })}
        </List>

        <Box sx={{ mt: "auto" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: 0.5,
              mb: 1.5,
            }}
          >
            <SettingsIcon
              sx={{ color: "text.secondary", fontSize: "1.2rem" }}
            />
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ fontWeight: "bold", fontSize: "0.95rem" }}
            >
              {isArabic ? "الإعدادات" : "Settings"}
            </Typography>
          </Box>

          <Stack
            spacing={1}
            sx={{
              bgcolor: "action.hover",
              borderRadius: 3,
              p: 1.5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 1,
                py: 0.5,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Language sx={{ color: "#8bc34a", fontSize: "1.3rem" }} />
                <Typography sx={{ fontWeight: "medium", fontSize: "0.95rem" }}>
                  {isArabic ? "اللغة" : "Language"}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Switch
                  checked={language === "en"}
                  onChange={handleToggleLanguageSwitch}
                  color="primary"
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontWeight: "medium" }}
                >
                  {isArabic ? "العربية" : "English"}
                </Typography>
              </Box>
            </Box>

            <Divider />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 1,
                py: 0.5,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                {mode === "dark" ? (
                  <Brightness7 sx={{ color: "#8bc34a", fontSize: "1.3rem" }} />
                ) : (
                  <Brightness4 sx={{ color: "#8bc34a", fontSize: "1.3rem" }} />
                )}
                <Typography sx={{ fontWeight: "medium", fontSize: "0.95rem" }}>
                  {isArabic ? "المظهر" : "Theme"}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Switch
                  checked={mode === "dark"}
                  onChange={handleToggleThemeSwitch}
                  color="primary"
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontWeight: "medium" }}
                >
                  {mode === "dark"
                    ? isArabic
                      ? "الداكن"
                      : "Dark"
                    : isArabic
                      ? "الفاتح"
                      : "Light"}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
      </SideDrawer>

      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <FavoritesDrawer
        open={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
      />
    </AppBar>
  );
}
