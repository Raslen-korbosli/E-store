import storeData from '../dataApi';

const productData = storeData.filter((item, i) => i < 8);
function ProudProduct() {
  return (
    <div className="pt-40 px-16 lg:px-48">
      <h1 className="text-2xl pb-8 font-semibold">Products We Are Proud Of</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {productData.map((product) => (
          <div
            key={product.productId}
            className="flex flex-col   justify-center border-2 shadow-sm"
          >
            <img src={product.productImg} alt="" className="h-full" />
            <div className="p-4 ">
              <p className="text-lg">{product.productName}</p>
              <span className="font-semibold text-xl">
                {product.productPrice}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProudProduct;
