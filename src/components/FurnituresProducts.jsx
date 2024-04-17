import storeData from '../dataApi';
import ProductsUI from './ui/ProductsUI';
const productData = storeData.filter(
  (item) => item.itemCategory === 'FURNITURES'
);

function furnituresProducts() {
  return <ProductsUI productData={productData} />;
}

export default furnituresProducts;
