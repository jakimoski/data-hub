import Button from "@mui/material/Button/Button";
import { Menu, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProductCard from "../../components/ProductCard/ProductCard";
import { categories, products } from "../../data/data";
import Filters from "../../components/Filters/Filters";
import AsideBanner from "../../components/AsideBanner/AsideBanner";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./product-listing.scss";

export default function ProductListing() {
  const { name } = useParams() as { name: string };
  const [anchorEl, setAnchorEl] = useState(null);

  const category = categories.find(
    (category) => category.name.toLowerCase() === name
  );

  const handleClick = () => {
    // setAnchorEl(event?.currentTarget);
    console.log("clicked");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const currentProducts = products.filter((product) =>
    product.categories.includes("КОМПЈУТЕРИ И ГЕЈМИНГ")
  );

  console.log(currentProducts);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <section className="product-listing grid-page-aside ">
      <section className="product-listing__main">
        <section className="product-listing__top">
          <div className="product-listing__breadcrumbs">
            <a href="/">Почетна</a> <span>/</span>
            <a href="/best-deals">{category.name}</a>
          </div>
          <div className="product-listing__title">
            <h2 className="page-title">{category.name}</h2>
          </div>
          <div className="product-listing__sort">
            <Button
              variant="outlined"
              size="large"
              onClick={handleClick}
              sx={{
                textTransform: "none",
                color: "black",
                borderRadius: "20px",
                border: "1px solid #f6f6f6",
                paddingX: "30px",
                fontWeight: "600",
                fontSize: "32px",
              }}
            >
              Подреди по популарност{" "}
              <span>
                <ExpandMoreIcon />
              </span>
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Option 1</MenuItem>
              <MenuItem onClick={handleClose}>Option 2</MenuItem>
              <MenuItem onClick={handleClose}>Option 3</MenuItem>
            </Menu>
          </div>
        </section>
        <section className="product-listing__products">
          <div className="product-listing__products-filters">
            <Filters />
          </div>
          <section className="product-listing__products-items">
            {currentProducts &&
              currentProducts.map((product) => (
                <ProductCard key={product?.id} product={product} />
              ))}
          </section>
        </section>
      </section>

      <section className="product-listing__aside">
        <div>
          <AsideBanner />
        </div>
      </section>
    </section>
  );
}
