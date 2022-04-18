import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Products page</h1>
      <ul>
          <li><Link to="/products/Hammer">Hammer</Link></li>
          <li><Link to="/products/Scissors">Scissors</Link></li>
          <li><Link to="/products/Screwdriver">Screwdriver</Link></li>
          <li><Link to="/products/Shovel">Shovel</Link></li>
          <li><Link to="/products/Pliers">Pliers</Link></li>
          <li><Link to="/products/wire-cutters">Wire Cutters</Link></li>
          <li><Link to="/products/Wrench">Wrench</Link></li>
      </ul>
    </section>
  );
};

export default Products;
