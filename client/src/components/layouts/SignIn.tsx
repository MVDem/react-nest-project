import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../store/userSlice';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [buttonTest, setButtonTest] = useState('Sign in');
  const [lable, setLable] = useState('formAuth__btn');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogin(email: string, pass: string) {
    const url = 'http://localhost:5000/auth/login';
    const bodySent = JSON.stringify({ email: email, password: pass });

    axios
      .post(url, bodySent, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => {
        dispatch(
          setUser({
            token: response.data.token,
          })
        );
        navigate('/dashboard', { replace: true });
      })
      .catch((error) => {
        setButtonTest('try again');
        setLable('formAuth__btn alarm');
      });
  }

  return (
    <div className="formAuth">
      <div className="formAuth__box">
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
      <div className="formAuth__box">
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
      <button className={lable} onClick={() => handleLogin(email, pass)}>
        {buttonTest}
      </button>
    </div>
  );
};

export default SignIn;
