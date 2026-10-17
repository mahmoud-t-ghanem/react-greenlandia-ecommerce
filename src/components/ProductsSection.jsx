import { useRef, useState } from "react";
import { Box, Grid, Pagination, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ProductCard from "./ProductCard";
import { products } from "../data/productsData";

const ITEMS_PER_PAGE = 8;

export default function ProductsSection({ searchQuery = "", limit }) {
  const { t } = useTranslation();
  const topRef = useRef(null);
  const [page, setPage] = useState(1);

  const term = searchQuery.trim().toLowerCase();

  const [prevTerm, setPrevTerm] = useState(term);
  if (prevTerm !== term) {
    setPrevTerm(term);
    setPage(1);
  }

  const filteredProducts = products.filter(
    (product) =>
      product.nameAr.toLowerCase().includes(term) ||
      product.nameEn.toLowerCase().includes(term),
  );

  const isPreview = typeof limit === "number";
  const pageCount = isPreview
    ? 1
    : Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const safePage = Math.min(page, Math.max(pageCount, 1));

  const displayedProducts = isPreview
    ? filteredProducts.slice(0, limit)
    : filteredProducts.slice(
        (safePage - 1) * ITEMS_PER_PAGE,
        safePage * ITEMS_PER_PAGE,
      );

  const handlePageChange = (event, value) => {
    setPage(value);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Container
      ref={topRef}
      maxWidth="lg"
      sx={{
        pt: 0,
        pb: 4,
        px: { xs: 1.5, sm: 3 },
        scrollMarginTop: { xs: "80px", md: "96px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {displayedProducts.length === 0 ? (
        <Typography color="text.secondary" sx={{ py: 6 }}>
          {t("noResults")}
        </Typography>
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          {displayedProducts.map((product) => (
            <Grid key={product.id} size={{ xs: 6, sm: 6, md: 3 }}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}

      {pageCount > 1 && (
        <Box sx={{ mt: 7, display: "flex", justifyContent: "center" }}>
          <Pagination
            count={pageCount}
            page={safePage}
            onChange={handlePageChange}
            color="primary"
            shape="rounded"
            size="large"
            sx={{
              "& .MuiPaginationItem-root.Mui-selected": {
                color: "#ffffff",
                backgroundColor: "primary.main",
              },
            }}
          />
        </Box>
      )}
    </Container>
  );
}
