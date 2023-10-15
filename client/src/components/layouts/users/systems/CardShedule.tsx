export interface ISheduleData {
  labels: Array<number>;
  datasets: Array<ISheduleSubData>;
}
interface ISheduleSubData {
  label: string;
  data: Array<number>;
  backgroundColor: string;
}
export function CardShedule() {
  return (
    <>
      <div className="shedule">
        <p className="shedule__title">Shedule</p>
        <div className="shedule__content"></div>
      </div>
    </>
  );
}
