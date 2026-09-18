import AboutHero from "../components/About/Hero/AboutHero";
import VeyroStatement from "../components/About/Statement/VeyroStatement";
import People from "../components/About/Story/People";
import Product from "../components/About/Story/Product";
import WorkSpace from "../components/About/Story/WorkSpace";
import Footer from "../components/Global/Footer/Footer";
function About() {
  return (
    <section>
      <AboutHero />
      <WorkSpace />
      <Product />
      <People />
      <VeyroStatement />
      <Footer />
    </section>
  );
}

export default About;
