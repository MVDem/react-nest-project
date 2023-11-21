import { useSelector } from 'react-redux';
import { IStateUser } from '../../../assets/types/type';
import { ChangeEvent, useState } from 'react';
import { addAvatar } from '../../../assets/http/requests';
import styles from './scss/inputImage.module.scss';

export default function InputImage(props: {
  getuserDetailed: any;
  setIsInputImage: any;
}) {
  const [avatarFile, setavatarFile] = useState<ChangeEvent<HTMLInputElement>>();

  const user = useSelector((state: IStateUser) => state.user);

  const file = avatarFile?.target.files![0];

  const handleSentAvatar = () => {
    const bodySent = {
      token: user.token,
      avatar: file,
    };

    addAvatar(bodySent, user.token, props.getuserDetailed);
    setavatarFile(undefined);
    props.setIsInputImage(false);
  };

  return (
    <div className={styles.form}>
      <div className={styles.form__close}>
        <button onClick={() => props.setIsInputImage(false)}>
          <img src="/img/close.svg" alt="close" />
        </button>
      </div>
      {!file && (
        <div className={styles.form__inputFile}>
          <input
            type="file"
            name="avatar"
            id="inputFile"
            onChange={(e) => setavatarFile(e)}
          />
          <div className={styles.form__chooseBtn}>
            <img src="/img/upload.svg" alt="upload" />
            <span>Choose file</span>
          </div>
        </div>
      )}
      {file && (
        <div className={styles.form__preview}>
          <img src={URL.createObjectURL(file)} alt={file.name} />
          <div className={styles.form__fileName}>
            Выбран файл : {file.name}
            <button onClick={() => setavatarFile(undefined)}>
              <img src="/img/close.svg" alt="close" />
            </button>
          </div>
        </div>
      )}
      {file && (
        <button className={styles.form__formBtn} onClick={handleSentAvatar}>
          Send avatar
        </button>
      )}
    </div>
  );
}
