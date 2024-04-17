import storeData from '../dataApi';
import ProductsUI from './ui/ProductsUI';

const productData = storeData.filter((item) => item.itemCategory === 'LAMPS');
function lampsProducts() {
  return <ProductsUI productData={productData} />;
}

export default lampsProducts;
