import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './scss/signIn.module.scss';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [сompanyName, setCompanyName] = useState('');

  const navigate = useNavigate();

  function handleSignUp(
    email: string,
    pass: string,
    name: string,
    lastName: string,
    phone: string,
    сompanyName: string
  ) {
    const url = 'http://localhost:5000/auth/registration';
    const bodySent = JSON.stringify({
      email: email,
      password: pass,
      name: name,
      lastName: lastName,
      phone: phone,
      сompanyName: сompanyName,
    });
    console.log(bodySent);
    return fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: bodySent,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        console.log('error');
      })
      .then((data) => {
        console.log(data);
        navigate('/dashboard', { replace: true });
      });
  }

  return (
    <div className={styles.formAuth}>
      <div className={styles.formAuth__main}>
        <div className={styles.formAuth__box}>
          <input
            name="email"
            type="text"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email</span>
          <i></i>
        </div>
        <div className={styles.formAuth__box}>
          <input
            name="password"
            type="password"
            required={true}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <span>Password</span>
          <i></i>
        </div>
        <div className={styles.formAuth__box}>
          <input
            name="name"
            type="text"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span>Name</span>
          <i></i>
        </div>
      </div>
      <div className={styles.formAuth__extra}>
        <div className={styles.formAuth__box}>
          <input
            name="lastName"
            type="text"
            required={true}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <span>Last name</span>
          <i></i>
        </div>
        <div className={styles.formAuth__box}>
          <input
            name="phone"
            type="text"
            required={true}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <span>Phone number</span>
          <i></i>
        </div>
        <div className={styles.formAuth__box}>
          <input
            name="сompanyName"
            type="text"
            required={true}
            value={сompanyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <span>Company name</span>
          <i></i>
        </div>
      </div>
      <button
        className={styles.formAuth__btn}
        onClick={() =>
          handleSignUp(email, pass, name, lastName, phone, сompanyName)
        }
      >
        Sign up
      </button>
    </div>
  );
};

export default SignUp;
