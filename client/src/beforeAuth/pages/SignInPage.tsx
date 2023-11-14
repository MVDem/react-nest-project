import { Link } from 'react-router-dom';
import SignIn from '../components/SignIn';
import styles from './scss/signInPage.module.scss';

export default function SignInPage() {
  return (
    <>
      <section className={styles.auth}>
        <div className={styles.auth__wrapper}>
          <div className={styles.auth__main}>
            <h2 className={styles.auth__title}>Login</h2>
            <SignIn />
            <div className={styles.auth__links}>
              {/* <Link className="auth__link" to="#">
                Forgot password
              </Link> */}
              <Link className={styles.auth__link} to="/signUp">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
