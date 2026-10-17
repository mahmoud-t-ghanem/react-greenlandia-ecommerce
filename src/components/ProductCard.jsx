import {
  Card,
  Typography,
  Box,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { lightGreen } from "@mui/material/colors";
import {
  Favorite,
  FavoriteBorder,
  AddShoppingCart,
  CheckCircle,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { toggleFavorite } from "../features/favoritesSlice";
import { useTranslation } from "react-i18next";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { t } = useTranslation();
  const { language } = useSelector((state) => state.settings);
  const isAr = language === "ar";

  const cartItems = useSelector((state) => state.cart.items);
  const favoriteItems = useSelector((state) => state.favorites.items);

  const cartItem = cartItems.find((item) => item.id === product.id);
  const isInCart = Boolean(cartItem);
  const isFavorite = favoriteItems.some((item) => item.id === product.id);

  const isDark = theme.palette.mode === "dark";
  const { primary, secondary } = theme.palette;
  const accentText = isDark ? primary.main : lightGreen[800];

  const name = isAr ? product.nameAr : product.nameEn;
  const description = isAr ? product.descriptionAr : product.descriptionEn;

  const cardBackground = isDark
    ? {
        backgroundColor: "#1a1f1a",
        backgroundImage: `linear-gradient(160deg, ${alpha(
          primary.main,
          0.12,
        )} 0%, ${alpha(primary.main, 0.02)} 70%)`,
      }
    : {
        backgroundColor: "#ffffff",
        backgroundImage: `linear-gradient(160deg, ${alpha(
          primary.main,
          0.12,
        )} 0%, ${alpha(secondary.main, 0.06)} 100%)`,
      };

  const buttonIconSx = {
    fontSize: { xs: "1.1rem", sm: "1.3rem" },
  };

  return (
    <Card
      elevation={0}
      sx={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: { xs: 1, sm: 1.25 },
        borderRadius: { xs: "20px", sm: "24px" },
        border: "1px solid",
        borderColor: alpha(primary.main, isDark ? 0.22 : 0.35),
        ...cardBackground,
        boxShadow: isDark
          ? "none"
          : `0 10px 30px ${alpha(theme.palette.common.black, 0.06)}`,
        transition:
          "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          borderColor: primary.main,
          boxShadow: `0 14px 32px ${alpha(primary.main, isDark ? 0.2 : 0.28)}`,
        },
        "&:hover .product-img": { transform: "scale(1.06)" },
      }}
    >
      <Box
        sx={{
          position: "relative",
          aspectRatio: "1 / 1",
          borderRadius: { xs: "14px", sm: "16px" },
          overflow: "hidden",
          bgcolor: alpha(primary.main, 0.08),
        }}
      >
        <Box
          component="img"
          className="product-img"
          src={product.image}
          alt={name}
          loading="lazy"
          decoding="async"
          sx={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            insetBlockStart: { xs: 6, sm: 8 },
            insetInlineStart: { xs: 6, sm: 8 },
            px: { xs: 1.2, sm: 1.5 },
            py: { xs: 0.6, sm: 0.8 },
            borderRadius: "999px",
            bgcolor: "secondary.main",
            color: "secondary.contrastText",
            fontWeight: 800,
            fontSize: { xs: "0.95rem", sm: "1.15rem" },
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
            boxShadow: `0 4px 12px ${alpha(secondary.main, 0.45)}`,
          }}
        >
          <Box component="span" dir="ltr" sx={{ unicodeBidi: "isolate" }}>
            {product.price}$
          </Box>
        </Box>

        <IconButton
          size="medium"
          aria-label={
            isAr
              ? isFavorite
                ? "إزالة من المفضلة"
                : "إضافة للمفضلة"
              : isFavorite
                ? "Remove from favorites"
                : "Add to favorites"
          }
          onClick={() => dispatch(toggleFavorite(product))}
          sx={{
            position: "absolute",
            insetBlockStart: { xs: 6, sm: 8 },
            insetInlineEnd: { xs: 6, sm: 8 },
            p: { xs: 0.75, sm: 1 },
            bgcolor: alpha("#ffffff", 0.85),
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            "&:hover": { bgcolor: "#ffffff" },
          }}
        >
          {isFavorite ? (
            <Favorite
              sx={{
                fontSize: { xs: "1.35rem", sm: "1.6rem" },
                color: secondary.main,
              }}
            />
          ) : (
            <FavoriteBorder
              sx={{
                fontSize: { xs: "1.35rem", sm: "1.6rem" },
                color: "#424242",
              }}
            />
          )}
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          px: { xs: 0.5, sm: 0.75 },
          pt: { xs: 1, sm: 1.25 },
          pb: 0.25,
        }}
      >
        <Typography
          noWrap
          sx={{
            fontWeight: 800,
            fontSize: { xs: "1.1rem", sm: "1.5rem" },
            lineHeight: 1.3,
          }}
        >
          {name}
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            mt: 0.4,
            mb: { xs: 1.1, sm: 1.5 },
            fontSize: { xs: "0.8rem", sm: "1rem" },
            lineHeight: 1.55,
            minHeight: "3.1em",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>

        <Button
          fullWidth
          variant={isInCart ? "outlined" : "contained"}
          color="primary"
          onClick={() => dispatch(addToCart(product))}
          sx={{
            color: "text.primary",
            mt: "auto",
            gap: 1,
            py: { xs: 0.75, sm: 0.9 },
            borderRadius: { xs: "12px", sm: "14px" },
            textTransform: "none",
            fontWeight: 700,
            fontSize: { xs: "0.9rem", sm: "1rem" },
            boxShadow: "none",
            ...(isInCart
              ? {
                  color: accentText,
                  borderColor: primary.main,
                  bgcolor: alpha(primary.main, 0.1),
                  "&:hover": {
                    borderColor: primary.main,
                    bgcolor: alpha(primary.main, 0.18),
                  },
                }
              : {
                  "&:hover": {
                    boxShadow: `0 6px 16px ${alpha(primary.main, 0.45)}`,
                  },
                }),
          }}
        >
          {isInCart ? (
            <CheckCircle sx={buttonIconSx} />
          ) : (
            <AddShoppingCart sx={buttonIconSx} />
          )}
          <span>
            {isInCart
              ? `${t("addedToCart")} · ${cartItem.quantity}`
              : t("addToCart")}
          </span>
        </Button>
      </Box>
    </Card>
  );
}
