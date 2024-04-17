import storeData from '../dataApi';
import ProductsUI from './ui/ProductsUI';
const productData = storeData.filter((item) => item.itemCategory === 'CHAIRS');

function ChairsProducts() {
  return <ProductsUI productData={productData} />;
}

export default ChairsProducts;
