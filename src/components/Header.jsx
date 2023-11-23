import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigation = useNavigate();

  function pathMatchesRoute(route) {
    return route === location.pathname;
  }

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <img
            src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg'
            alt='logo'
            className='h-5 cursor-pointer'
            onClick={() => navigation('/')}
          />
        </div>
        <div>
          <ul className='flex space-x-10 cursor-pointer'>
            <li
              className={`py-3 text-sm font-semibold ${
                pathMatchesRoute('/')
                  ? 'text-black border-b-2 border-red-400'
                  : 'text-gray-400'
              }`}
              onClick={() => navigation('/')}
            >
              Home
            </li>
            <li
              className={`py-3 text-sm font-semibold ${
                pathMatchesRoute('/offers')
                  ? 'text-black border-b-2 border-red-400'
                  : 'text-gray-400'
              }`}
              onClick={() => navigation('/offers')}
            >
              Offers
            </li>
            <li
              className={`py-3 text-sm font-semibold ${
                pathMatchesRoute('/sign-in')
                  ? 'text-black border-b-2 border-red-400'
                  : 'text-gray-400'
              }`}
              onClick={() => navigation('/sign-in')}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
