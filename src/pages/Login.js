import { useState } from "react";
import styles from "../styles/login.module.css";
import login from "../assets/images/login.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  const HandleLogin = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    let error = false;
    if (!email || !password) {
      error = true;
    }
    if (!error) {
      alert("The Email you entered is not registered!!");
    }
  };

  const HandleLoginAsGuest = () => {
    auth.login();
    setTimeout(() => {
      navigate("/", window.scrollTo(0, 0));
    }, 1000);
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={HandleLogin}>
        <div className={styles.loginLogo}>
          <span>Login</span>
          <img src={login} alt="food"></img>
        </div>
        <div className={styles.field}>
          <input
            className={styles.input_field}
            type="email"
            value={email}
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={styles.validation_check}>
            {isSubmit && email === "" ? "Enter your email address" : ""}
          </div>
        </div>
        <div className={styles.field}>
          <input
            className={styles.input_field}
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles.validation_check}>
            {isSubmit && password === "" ? "Enter password" : ""}
          </div>
        </div>
        <div className={styles.field}>
          <button className={styles.submit_btn}>Login</button>
        </div>
        <div className={styles.login_guest} onClick={HandleLoginAsGuest}>
          login as a Guest
        </div>
      </form>
    </div>
  );
};

export default Login;
