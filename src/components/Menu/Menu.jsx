import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  );
};

export default Menu;
