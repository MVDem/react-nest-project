import styles from './scss/mainCards.module.scss';

export function CardNotification() {
  return (
    <>
      <div className={styles.card}>
        <h3 className={styles.card__title}>Notification</h3>
        <div className={styles.notifications}>
          <p className={styles.notifications__title}>11.09.2023</p>
          <p className={styles.notifications__subtitle}>
            Провести лабораторные испытания
          </p>
          <p className={styles.notifications__title}>11.09.2023</p>
          <p className={styles.notifications__subtitle}>
            Провести лабораторные испытания
          </p>
          <p className={styles.notifications__title}>11.09.2023</p>
          <p className={styles.notifications__subtitle}>
            Провести лабораторные испытания
          </p>
          <p className={styles.notifications__title}>11.09.2023</p>
          <p className={styles.notifications__subtitle}>
            Провести лабораторные испытания
          </p>
          <p className={styles.notifications__title}>11.09.2023</p>
          <p className={styles.notifications__subtitle}>
            Провести лабораторные испытания
          </p>
        </div>
      </div>
    </>
  );
}
