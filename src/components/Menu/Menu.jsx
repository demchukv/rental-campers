import { Link } from 'react-router-dom';
import css from './Menu.module.css';
import { useLocation } from 'react-router-dom';

const Menu = () => {
  const location = useLocation();

  return (
    <div className={css.navPanel}>
      <nav className={css.navigation}>
        <Link
          className={[
            css.navItem,
            location.pathname === '/' && css.current,
          ].join(' ')}
          to="/"
        >
          Home
        </Link>
        <Link
          className={[
            css.navItem,
            location.pathname === '/catalog' && css.current,
          ].join(' ')}
          to="/catalog"
        >
          Catalog
        </Link>
        <Link
          className={[
            css.navItem,
            location.pathname === '/favorites' && css.current,
          ].join(' ')}
          to="/favorites"
        >
          Favorites
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
