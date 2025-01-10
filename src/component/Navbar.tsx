import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-center gap-4 bg-gray-800 p-4 rounded-md">
      <Link to="/" className="text-white hover:text-gray-300">
        All
      </Link>
      <Link to="/?todo=active" className="text-white hover:text-gray-300">
        Active
      </Link>
      <Link to="/?todo=complete" className="text-white hover:text-gray-300">
        Complete
      </Link>
    </nav>
  );
};

export default Navbar;
