import { Link } from 'react-router-dom';
import SignUp from '../components/SignUp';
import styles from './scss/signInPage.module.scss';

export default function SignUpPage() {
  return (
    <>
      <section className={styles.auth}>
        <div className={styles.auth__wrapper}>
          <div className={styles.auth__main}>
            <h2 className={styles.auth__title}>Register</h2>
            <SignUp />
            <div className={styles.auth__links}>
              {/* <Link className="auth__link" to="#">
                Forgot password
              </Link> */}
              <Link className={styles.auth__link} to="/signIn">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
