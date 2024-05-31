import { useParams } from "react-router-dom";
import MainProductDetails from "../../components/MainProductDetails/MainProductDetails";
import AsideBanner from "../../components/AsideBanner/AsideBanner";
import { products } from "../../data/data";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const productId = id ?? "";

  const product = products.find((product) => product.id === +productId);

  console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="grid-page-aside">
      <section className="product-page--product">
        <MainProductDetails product={product} />
      </section>
      <section className="product-page--aside">
        <AsideBanner />
      </section>
    </section>
  );
}
