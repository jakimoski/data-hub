import { useParams } from "react-router-dom";
import MainProductDetails from "../../components/MainProductDetails/MainProductDetails";

import { products } from "../../data/data";
import AsideBanner from "../../components/AsideBanner/AsideBanner";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const productName = decodeURI(id as string);

  const product = products.find(
    (product) => product.productName === productName
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className="grid-page-aside">
      <section className="product-page--product">
        <MainProductDetails product={product} />
      </section>
      <section className="product-page--aside">
        <AsideBanner />
      </section>
    </main>
  );
}
