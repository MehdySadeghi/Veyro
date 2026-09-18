import Hero from "../components/Home/Hero/Hero";
import PopularProducts from "../components/Home/Popular/PopularProducts";
import LifestyleSection from "../components/Home/LifeStyle/LifestyleSection";
import FeaturedProductsAirPods from "../components/Home/FeaturedProducts/FeaturedProductsAirPods";
import FeaturedProductsImac from "../components/Home/FeaturedProducts/FeaturedProductsImac";
import Footer from "../components/Global/Footer/Footer";
import NewProducts from "../components/Home/NewProducts/NewProducts";
import ShopFeatures from "../components/Home/ShopFeature/ShopFeatures";

function Home() {
  return (
    <div>
      <Hero />
      <PopularProducts />
      <LifestyleSection />
      <NewProducts />
      <FeaturedProductsAirPods />
      <FeaturedProductsImac />
      <ShopFeatures />
      <Footer />
    </div>
  );
}

export default Home;
