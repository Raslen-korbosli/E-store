import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';

function Categories() {
  const categoriesData = [
    'All',
    'Furnitures',
    'Electronics',
    'Lamps',
    'Kitchen',
    'Chairs',
    'SkinCare',
  ];
  return (
    <div className="flex flex-col my-48 justify-center items-center  lg:mx-48 mx-24 gap-14 relative">
      <button className="flex items-center text-md absolute left-14 top-0 hover:underline">
        <MdKeyboardArrowLeft
          className="
        text-2xl "
        />{' '}
        <Link to="/"> Home</Link>
      </button>
      <h1 className="text-2xl text-stone-950 font-bold">All</h1>
      <ul className="flex gap-4 text-lg">
        {categoriesData.map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            onClick={() => window.scrollTo(0, 0)}
          >
            <li className=" border-2 border-stone-300 px-3 rounded-sm text-md text-stone-600">
              {item}
            </li>{' '}
          </Link>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default Categories;
