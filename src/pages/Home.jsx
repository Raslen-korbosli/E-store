import AboutStore from '../components/AboutStore';
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
    </div>
  );
}

export default Home;
