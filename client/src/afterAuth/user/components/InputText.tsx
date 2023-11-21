import { useSelector } from 'react-redux';
import { IStateUser } from '../../../assets/types/type';
import { useState } from 'react';
import { editUser } from '../../../assets/http/requests';
import styles from './scss/inputText.module.scss';

export default function InputText(props: {
  setIsInputText: any;
  getuserDetailed: any;
  setatrInputText: any;
  atrInputText: string;
}) {
  const [atrValue, setAtrValue] = useState('');

  const user = useSelector((state: IStateUser) => state.user);

  const hadleCloseWindow = () => {
    props.setIsInputText(false);
    props.setatrInputText('');
  };

  const handleSentChanges = () => {
    const bodySent = {
      token: user.token,
      [props.atrInputText]: atrValue,
    };
    editUser(bodySent, user.token, props.getuserDetailed);

    props.setIsInputText(false);
    props.setatrInputText('');
    setAtrValue('');
  };

  return (
    <div className={styles.inputText}>
      <div>
        <button onClick={() => hadleCloseWindow()}>
          <img src="/img/close.svg" alt="close" />
        </button>
      </div>
      <input
        placeholder="write the "
        required={true}
        value={atrValue}
        onChange={(e) => setAtrValue(e.target.value)}
      />
      <button onClick={handleSentChanges}>
        Send change {props.atrInputText}
      </button>
    </div>
  );
}
