const productData = [
  {
    productId: '1',
    productImg: 'img/products/1.jpg',
    productName: 'Little Armchair Sheepskin',
    productPrice: '958$',
  },

  {
    productId: '2',
    productImg: 'img/products/2.jpg',
    productName: 'Lamp Light Blue',
    productPrice: '25$',
  },
  {
    productId: '3',
    productImg: 'img/products/3.png',
    productName: 'Little Armchair Sheepskin',
    productPrice: '958$',
  },
  {
    productId: '4',
    productImg: 'img/products/4.jpg',
    productName: 'Pulp Unit - 5 Compartments',
    productPrice: '209$',
  },
  {
    productId: '5',
    productImg: 'img/products/5.jpg',
    productName: 'Golden Modern Light',
    productPrice: '175$',
  },
  {
    productId: '6',
    productImg: 'img/products/6.jpg',
    productName: 'Body Oil 200ml',
    productPrice: '32$',
  },
  {
    productId: '7',
    productImg: 'img/products/7.jpg',
    productName: 'Black and White Lamp',
    productPrice: '200$',
  },
  {
    productId: '8',
    productImg: 'img/products/8.jpg',
    productName: 'Gejst Shelf A Black Ash/Black',
    productPrice: '149$',
  },
];
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
