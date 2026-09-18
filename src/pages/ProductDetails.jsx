import { useParams } from "react-router-dom";
import { products } from "../data/Producs";

import ProductDetailsHero from "../components/ProductDetails/ProductDetailsHero";
import Nav from "../components/Global/Navbar/Nav";
import NotFound from "./NotFound";
import Footer from "../components/Global/Footer/Footer";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((el) => el.id === +id);

  return product ? (
    <main>
      <Nav variant="dark" />
      <ProductDetailsHero product={product} />
      <Footer />
    </main>
  ) : (
    <NotFound />
  );
}

export default ProductDetails;
