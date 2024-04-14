function NewsLetter() {
  return (
    <div className="bg-stone-900 px-16 lg:px-40 flex items-center  justify-start flex-col gap-8 py-16">
      <h1 className=" text-4xl text-slate-200 font-semibold">Newsletter</h1>
      <div className="lg:space-x-4 flex flex-col lg:flex-row justify-center gap-4">
        <input
          type="text"
          placeholder="your@gmail.com"
          className="py-[0.6rem] pl-4 pr-12 rounded-sm bg-slate-10 outline-none"
        />
        <button className="text-stone-950 text-lg font-semibold bg-slate-100 py-2 px-12 rounded-sm">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
