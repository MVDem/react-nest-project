import styles from './scss/changeInfoButton.module.scss';

export default function ChangeInfoButton(props: { text: string; cb: any }) {
  return (
    <button className={styles.btn} onClick={props.cb()}>
      {props.text}
      <img src="/img/edit.png" alt="edit" />
    </button>
  );
}
