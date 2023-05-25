import Cartwidjet from "../../common/CartWidget/Cartwidjet";

const Navbar = () => {
  return (
    <div>
      <h4>Imagen</h4>
      <ul>
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>
      <Cartwidjet />
    </div>
  );
};

export default Navbar;
