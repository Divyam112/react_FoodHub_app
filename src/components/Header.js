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
        <a href="/">
          <img alt="food hub" src={logo} />
        </a>
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
            <Link to="/cart">
              <span className={styles.cart_item_count}>{cartItemsCount}</span>
              <span>Cart</span>
            </Link>
          </li>
        </ul>
      </div>
      <div>{auth?.user?.name}</div>
      <div className={styles.signInOut}>
        {auth.user ? (
          <button onClick={auth.logout}>Log Out</button>
        ) : (
          <Link to="/login">
            <button>Log In</button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Header;
