import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
      <p>Page Not Found :</p>

      <button className="rounded-md bg-slate-300 px-6 py-4">
        <Link to={'/'}>return home </Link>
      </button>
    </div>
  );
}

export default PageNotFound;
