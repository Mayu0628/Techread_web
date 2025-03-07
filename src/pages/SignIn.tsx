import Button from "@/components/button/Button";
import styles from "@/styles/signUp.module.css";

const SignIn = () => {
  return (
    <div className={styles.login_container}>
      <div className={styles.login_main_container}>
        <h1>Sign in</h1>
        <div className={styles.input_container}>
          <input type="text" placeholder="名前" className={styles.mail} />
          <input
            type="text"
            placeholder="メールアドレス"
            className={styles.mail}
          />
          <input type="text" placeholder="パスワード" />
        </div>
        <Button>サインイン</Button>
      </div>
    </div>
  );
};

export default SignIn;
