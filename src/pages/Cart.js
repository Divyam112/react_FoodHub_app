import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/cart.module.css";
import emptyCartImg from "../assets/images/empty_cart.jpg";
import { useNavigate } from "react-router-dom";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";
import { CDN_IMG_URL } from "../utils/Constants.js";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let totalAmount = 0;

  const HandleClearCart = () => {
    dispatch(clearCart());
  };

  const HandleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const HandleReduceItem = (item) => {
    dispatch(removeItem(item));
  };

  if (cartItems?.items?.length === 0) {
    return (
      <div>
        <img src={emptyCartImg} alt="cart empty" />
        <p style={{ fontWeight: "bold", lineHeight: "5px" }}>
          Your cart is empty
        </p>
        <p style={{ color: "gray", lineHeight: "5px" }}>
          You can go to home page to view more restaurants
        </p>
        <button
          className={styles.checkout_btn}
          onClick={() => {
            navigate("/", window.scrollTo(0, 0));
          }}
        >
          SEE RESTAURANT NEAR YOU
        </button>
      </div>
    );
  }
  return (
    <>
      <div className={styles.cartContainer}>
        <div className={styles.rest_name}>
          <img
            src={`${CDN_IMG_URL}${cartItems?.restaurant?.img}`}
            alt="cart empty"
          />
          <div>{cartItems?.restaurant?.name}</div>
        </div>
        <div className={styles.cart_selected_items}>
          {cartItems?.items?.map((item) => {
            {
              totalAmount =
                totalAmount +
                (item?.count * (item?.price || item?.defaultPrice)) / 100;
            }
            return (
              <div className={styles.cart_item} key={`cartItem-${item?.id}`}>
                <div>{item?.name}</div>
                <div className={styles.cart_btn}>
                  <span onClick={() => HandleReduceItem(item)}>-</span>
                  <span>{item?.count}</span>
                  <span onClick={() => HandleAddItem(item)}>+</span>
                </div>
                <div>
                  ₹{(item?.count * (item?.price || item?.defaultPrice)) / 100}
                </div>
              </div>
            );
          })}
          <div>
            <div style={{ fontWeight: "bold", margin: "10px" }}>
              Bill Details
            </div>
            <div className={styles.cart_item}>
              <span>Item Total</span>
              <span>₹{totalAmount.toFixed(2)}</span>
            </div>
            <div className={styles.cart_item}>
              <span>Delivery Fee</span>
              <span>₹30</span>
            </div>
            <div className={styles.cart_item}>
              <span>Platform Fee</span>
              <span>₹2</span>
            </div>
            <div className={styles.cart_item}>
              <span>GST and Restaurant Charges</span>
              <span>₹{((totalAmount * 3) / 100).toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className={styles.cart_total}>
          <span>TO PAY</span>
          <span>
            ₹{(totalAmount + 30 + 2 + (totalAmount * 3) / 100).toFixed(2)}
          </span>
        </div>
      </div>
      <div>
        <button className={styles.checkout_btn}>Checkout</button>
        <button
          className={styles.checkout_btn}
          onClick={() => HandleClearCart()}
        >
          Clear Cart
        </button>
      </div>
    </>
  );
};

export default Cart;
