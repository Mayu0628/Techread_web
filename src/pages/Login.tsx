import styles from "@/styles/Login.module.css";
import Button from "@/components/button/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.login_container}>
      <div className={styles.login_main_container}>
        <h1>Login</h1>
        <div className={styles.input_container}>
          <input
            type="text"
            placeholder="メールアドレス"
            className={styles.mail}
          />
          <input type="text" placeholder="パスワード" />
        </div>
        <Button>ログイン</Button>
        <Link to="/sign-in" className={styles.link}>
          アカウントをお持ちでない方はこちら
        </Link>
      </div>
    </div>
  );
};

export default Login;
