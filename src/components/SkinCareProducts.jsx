import storeData from '../dataApi';
import ProductsUI from './ui/ProductsUI';

const productData = storeData.filter(
  (item) => item.itemCategory === 'SKINCARE'
);

function SkinCareProducts() {
  return <ProductsUI productData={productData} />;
}

export default SkinCareProducts;
