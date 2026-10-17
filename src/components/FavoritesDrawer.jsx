import { Box, Typography, IconButton, Divider, Button } from "@mui/material";
import {
  Close,
  Favorite,
  FavoriteBorder,
  AddShoppingCart,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../features/favoritesSlice";
import { addToCart } from "../features/cartSlice";
import SideDrawer from "./SideDrawer";

export default function FavoritesDrawer({ open, onClose }) {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.settings);
  const favoriteItems = useSelector((state) => state.favorites.items);
  const cartItems = useSelector((state) => state.cart.items);
  const isArabic = language === "ar";

  return (
    <SideDrawer open={open} onClose={onClose}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
          <Favorite sx={{ color: "#8bc34a", fontSize: "2rem" }} />
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
          >
            {isArabic ? "المفضلة" : "Favorites"}
          </Typography>
        </Box>
        <IconButton
          onClick={onClose}
          sx={{
            bgcolor: "action.hover",
            "&:hover": { bgcolor: "action.selected" },
          }}
        >
          <Close />
        </IconButton>
      </Box>

      <Divider />

      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          py: 2.5,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        {favoriteItems.length === 0 ? (
          <Box sx={{ textAlign: "center", mt: 6, color: "text.secondary" }}>
            <FavoriteBorder sx={{ fontSize: "3.5rem", opacity: 0.4, mb: 1 }} />
            <Typography>
              {isArabic ? "ما في منتجات مفضلة" : "No favorites yet"}
            </Typography>
          </Box>
        ) : (
          favoriteItems.map((item) => {
            const inCart = cartItems.some((c) => c.id === item.id);
            return (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  p: 1.5,
                  borderRadius: 3,
                  bgcolor: "action.hover",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={isArabic ? item.nameAr : item.nameEn}
                  sx={{
                    width: 72,
                    height: 72,
                    objectFit: "contain",
                    bgcolor: "#f2f2f2",
                    borderRadius: 2,
                    p: 0.5,
                    flexShrink: 0,
                  }}
                />

                <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                  <Typography
                    noWrap
                    sx={{ fontWeight: "bold", fontSize: "1rem" }}
                  >
                    {isArabic ? item.nameAr : item.nameEn}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#8bc34a", fontWeight: "bold", mb: 0.8 }}
                  >
                    {item.price}$
                  </Typography>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => dispatch(addToCart(item))}
                    sx={{
                      gap: 0.75,
                      bgcolor: inCart ? "#2e7d32" : "#43a047",
                      "&:hover": { bgcolor: "#2e7d32" },
                      borderRadius: 1.5,
                      textTransform: "none",
                      boxShadow: "none",
                      fontSize: "0.75rem",
                    }}
                  >
                    <AddShoppingCart fontSize="small" />
                    <span>{isArabic ? "أضف للسلة" : "Add to cart"}</span>
                  </Button>
                </Box>

                <IconButton
                  onClick={() => dispatch(toggleFavorite(item))}
                  sx={{ color: "#d32f2f" }}
                >
                  <Favorite />
                </IconButton>
              </Box>
            );
          })
        )}
      </Box>
    </SideDrawer>
  );
}
