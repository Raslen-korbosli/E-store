import { Link } from 'react-router-dom';

function AboutStore() {
  return (
    <div className="flex lg:px-48 pt-40 px-16 h-[40rem] overflow-hidden">
      <div className="flex flex-col px-6 md:px-16 lg:px-24 flex-[1 ,1] text-center md:text-left bg-stone-200 items-center md:items-start justify-center gap-4">
        <h1 className="font-bold text-2xl md:text-3xl mb-3 text-gray-950">
          Creative harmonious living
        </h1>
        <p className="text-lg text-slate-950">
          RAOUF Products are all made to standard sizes so that you can mix and
          match them freely.
        </p>
        <Link to="/categories/all">
          <button className="font-semibold text-slate-200 text-xl bg-slate-950 px-6 py-3 hover:bg-stone-200 hover:border-stone-950 border-2 hover:text-stone-950 transition-all">
            Shop Now
          </button>
        </Link>
      </div>
      <div className="overflow-hidden hidden md:block   ">
        <img
          src="img/banner/banner1.jpg"
          alt=""
          className=" h-full lg:object-cover max-w-none   "
        />
      </div>
    </div>
  );
}

export default AboutStore;
