import storeData from '../dataApi';
import ProductsUI from './ui/ProductsUI';

const productData = storeData.filter((item) => item.itemCategory === 'KITCHEN');
function kitchenProducts() {
  return <ProductsUI productData={productData} />;
}

export default kitchenProducts;
