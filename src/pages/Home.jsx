import AboutStore from '../components/AboutStore';
import Footer from '../components/Footer';
import NewsLetter from '../components/NewsLetter';
import ProductSections from '../components/ProductSections';
import ProudProduct from '../components/ProudProduct';
import TrendingProducts from '../components/TrendingProducts';

function Home() {
  return (
    <div className="">
      <ProductSections />
      <ProudProduct />
      <AboutStore />
      <TrendingProducts />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
