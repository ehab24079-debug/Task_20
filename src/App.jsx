
import Footer from "./Footer";
import Header from "./Header";
import HeroPic from "./HeroPic";
import Products from "./Products";
import TextHero from "./TextHero";

export default function App() {
  return (
    <div className="d-flex flex-column ">
      <Header />
      <div className="container d-flex">
        <HeroPic />
        <TextHero />
      </div>
      <Products />
      <Footer />
    </div>
  );
}
