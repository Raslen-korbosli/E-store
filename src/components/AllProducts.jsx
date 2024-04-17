import productData from '../dataApi';
import ProductsUI from './ui/ProductsUI';

function AllProducts() {
  return <ProductsUI productData={productData} />;
}

export default AllProducts;
