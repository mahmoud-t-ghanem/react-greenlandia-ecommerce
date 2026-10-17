import { Box, Typography, IconButton, Divider, Button } from "@mui/material";
import {
  Close,
  ShoppingCart,
  Add,
  Remove,
  DeleteOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../features/cartSlice";
import SideDrawer from "./SideDrawer";

export default function CartDrawer({ open, onClose }) {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.settings);
  const cartItems = useSelector((state) => state.cart.items);
  const isArabic = language === "ar";

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

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
          <ShoppingCart sx={{ color: "#8bc34a", fontSize: "2rem" }} />
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
          >
            {isArabic ? "سلة المشتريات" : "Shopping Cart"}
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
        {cartItems.length === 0 ? (
          <Box sx={{ textAlign: "center", mt: 6, color: "text.secondary" }}>
            <ShoppingCart sx={{ fontSize: "3.5rem", opacity: 0.4, mb: 1 }} />
            <Typography>
              {isArabic ? "السلة فارغة" : "Your cart is empty"}
            </Typography>
          </Box>
        ) : (
          cartItems.map((item) => (
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
                  sx={{ color: "#8bc34a", fontWeight: "bold", mb: 0.5 }}
                >
                  {item.price}$
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <IconButton
                    size="small"
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity - 1,
                        }),
                      )
                    }
                    disabled={item.quantity <= 1}
                    sx={{ bgcolor: "action.selected" }}
                  >
                    <Remove fontSize="small" />
                  </IconButton>
                  <Typography
                    sx={{
                      minWidth: 28,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {item.quantity}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1,
                        }),
                      )
                    }
                    sx={{ bgcolor: "action.selected" }}
                  >
                    <Add fontSize="small" />
                  </IconButton>
                </Box>
              </Box>

              <IconButton
                onClick={() => dispatch(removeFromCart(item.id))}
                sx={{ color: "error.main" }}
              >
                <DeleteOutlined />
              </IconButton>
            </Box>
          ))
        )}
      </Box>

      {cartItems.length > 0 && (
        <Box sx={{ pt: 2 }}>
          <Divider sx={{ mb: 2 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography sx={{ fontWeight: "medium" }}>
              {isArabic ? "المجموع" : "Total"}
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "1.25rem", color: "#8bc34a" }}
            >
              {total.toFixed(2)}$
            </Typography>
          </Box>
          <Button
            fullWidth
            variant="outlined"
            color="error"
            onClick={() => dispatch(clearCart())}
            sx={{ borderRadius: 3, py: 1.2, textTransform: "none" }}
          >
            {isArabic ? "تفريغ السلة" : "Clear cart"}
          </Button>
        </Box>
      )}
    </SideDrawer>
  );
}
