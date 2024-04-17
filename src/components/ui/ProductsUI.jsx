import { Link } from 'react-router-dom';

function ProductsUI({ productData }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {productData.map((product) => (
        <Link
          key={product.productId}
          className="flex flex-col justify-center border-2 shadow-sm hover:shadow-xl"
          to={`/categories/${product.itemCategory}/${product.productId}`}
        >
          <img src={product.productImg} alt="" className="h-full" />

          <div className="p-4 ">
            <p className="text-lg">{product.productName}</p>
            <span className="font-semibold text-xl">
              {product.productPrice}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductsUI;
