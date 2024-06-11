import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
      <p>Page Not Found :</p>

      <Link to={'/'}>
        <button className="rounded-md bg-slate-300 px-6 py-4">
          return home
        </button>{' '}
      </Link>
    </div>
  );
}

export default PageNotFound;
