import { Link } from 'react-router-dom';
const data = [
  {
    imgUrl: 'img/header/home-img-1.jpg',
    navigateTo: '/categories/furnitures',
    title: 'Live Comfortably ',
    imgAlt: 'Live Comfortably image',
    className: 'md:row-span-2 md:col-span-2  ',
    imageStyles: '  ',
  },
  {
    imgUrl: 'img/header/home-img-2.jpg',
    navigateTo: '/categories/skincare',
    title: 'SkinCare',
    imgAlt: 'Skin Care image',
    className: 'md:row-span-2 ',
    imageStyles: ' ',
  },
  {
    imgUrl: 'img/header/home-img-3.jpg',
    navigateTo: '/categories/kitchen',
    title: 'Kitchen',
    imgAlt: 'Kitchen image',
    className: '',
    imageStyles: 'scale-x-125 ',
  },
  {
    imgUrl: 'img/header/home-img-4.jpg',
    navigateTo: '/categories/electronics',
    title: 'Electronics',
    imgAlt: 'Electronics image',
    className: '',
    imageStyles: 'scale-x-125',
  },
];
function ProductSections() {
  return (
    <div className="grid p-4  grid-cols-[repeat(2,minmax(0,20rem))] md:grid-cols-[repeat(4,minmax(0,1fr))] justify-center mx-auto  grid-rows-[repeat(2,minmax(0,14rem))] gap-4 px-8 mx:px-20 lg:px-20 xl:px-48 mt-4  ">
      {data.map((category) => (
        <div
          key={category.title}
          className={`relative overflow-hidden shadow-md  ${category.className}`}
        >
          <Link to={category.navigateTo}>
            <div className="overlay "></div>
            <img
              src={category.imgUrl}
              alt={category.imgAlt}
              className={`w-full h-full object-cover  ${category.imageStyles}`}
            />
            <p className="absolute z-40 bottom-4 left-4 text-xl sm:text-2xl xl:text-3xl font-bold text-slate-100 hover:text-slate-200">
              {category.title}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductSections;
