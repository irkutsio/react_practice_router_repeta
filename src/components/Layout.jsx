import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Collection</NavLink>
        </li>
      </ul>
      <main>

        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
