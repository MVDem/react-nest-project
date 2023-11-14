import styles from './scss/mainCards.module.scss';

export function CardAlarms() {
  return (
    <>
      <div className={styles.card}>
        <h3 className={styles.card__title}>Alarms</h3>
        <div className={styles.alarms}>
          <p className={styles.alarms__title}>25.07.2023</p>
          <p className={styles.alarms__subtitle}>
            Отключение питания на Вводе1
          </p>
          <p className={styles.alarms__title}>25.07.2023</p>
          <p className={styles.alarms__subtitle}>
            Отключение питания на Вводе1
          </p>
          <p className={styles.alarms__title}>25.07.2023</p>
          <p className={styles.alarms__subtitle}>
            Отключение питания на Вводе1
          </p>
          <p className={styles.alarms__title}>25.07.2023</p>
          <p className={styles.alarms__subtitle}>
            Отключение питания на Вводе1
          </p>

          <p className={styles.alarms__title}>25.07.2023</p>
          <p className={styles.alarms__subtitle}>
            Отключение питания на Вводе1
          </p>
          <p className={styles.alarms__title}>25.07.2023</p>
          <p className={styles.alarms__subtitle}>
            Отключение питания на Вводе1
          </p>
        </div>
      </div>
    </>
  );
}
