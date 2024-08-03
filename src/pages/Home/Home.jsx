import Info from "../../components/Info/Info";
import Nav from "../../components/nav/Nav";
import DynamicSlider from "../../components/DynamicSlider/DynamicSlider";
import Features from "../../components/Features/Features";
import StaticProducts from "../../components/StaticProducts/StaticProducts";
import StaticSlider from "../../components/StaticSlider/StaticSlider";
import SpecialProducts from "../../components/SpecialProducts/SpecialProducts";
import SPecialBanners from "../../components/SPecialBanners/SPecialBanners";
import CountdownProduct from "../../components/CountdownProduct/CountdownProduct";
import DynamicPrducts from "../../components/DynamicProducts/DynamicProducts";
import Offers from "../../components/Offers/Offers";
import Testimonials from "../../components/Testimonials/Testimonials";
import Blogs from "../../components/Blogs/Blogs";
import Brands from "../../components/Brands/Brands";
import Footer from "../../components/Footer/Footer";

import "./Home.css";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import DynamicLinks from "../../components/DynamicLinks/DynamicLinks";
import GlobalCountDown from "../../components/GlobalCountDown/GlobalCountDown";

function Home() {
  return (
    <div className="home">
      <Info />
      <Nav />
      <DynamicLinks />
      <DynamicSlider />
      <Features />
      <StaticProducts />
      <StaticSlider />
      <SpecialProducts />
      <SPecialBanners />
      <CountdownProduct />
      <GlobalCountDown />
      <DynamicPrducts />
      <Offers />
      <DynamicSlider number={2} />
      <StaticSlider number={2} />
      <Testimonials />
      <Blogs />
      <Brands />
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default Home;
