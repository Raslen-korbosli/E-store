import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import storeData from '../dataApi';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const productData = storeData.filter((item, i) => i < 10);
function TrendingProducts() {
  return (
    <div className="py-40 px-16 lg:px-48   ">
      <h1 className="text-2xl pb-8 font-semibold">Trending Now</h1>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        autoPlay={true}
        infinite={true}
        ssr={true}
      >
        {productData.map((product) => (
          <div
            key={product.productId}
            className="flex flex-col h-full justify-center border-2 mx-1  gap-2 shadow-sm"
          >
            <img src={product.productImg} alt="" />
            <div className="p-4 ">
              <p className="text-lg">{product.productName}</p>
              <span className="font-semibold text-xl">
                {product.productPrice}
              </span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default TrendingProducts;
