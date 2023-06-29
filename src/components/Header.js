import styles from "../styles/header.module.css";
import logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const auth = useAuth();
  const cartItemsCount = useSelector((store) => store.cart.totalCount);
  return (
    <div className={styles.header_main}>
      <div className={styles.logo}>
        <Link to="/">
          <img data-testid="test_logo" alt="food hub" src={logo} />
        </Link>
      </div>
      <div className={styles.page_list}>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link data-testid="test_cartPage" to="/cart">
              <span data-testid="test_cart" className={styles.cart_item_count}>
                {cartItemsCount}
              </span>
              <span>Cart</span>
            </Link>
          </li>
        </ul>
      </div>
      <div data-testid="test_auth">{auth?.user?.name}</div>
      <div className={styles.signInOut}>
        {auth.user ? (
          <button onClick={auth.logout}>Log Out</button>
        ) : (
          <Link to="/login">
            <button data-testid="test_loginBtn">Log In</button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Header;
