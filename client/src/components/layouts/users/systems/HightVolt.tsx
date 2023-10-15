import { CardCurrent } from './CardCurrent';
import { CardVoltage } from './CardVoltage';
import { CardScheme } from './CardScheme';
import { CardShedule } from './CardShedule';
import { CardData } from './CardData';

export default function HightVoltCard() {
  return (
    <>
      <div className="system">
        <div className="system__current">
          <CardCurrent />
        </div>
        <div className="system__voltage">
          <CardVoltage />
        </div>
        <div className="system__scheme">
          <CardScheme />
        </div>
        <div className="system__current-schedule">
          <CardShedule />
        </div>
        <div className="system__data">
          <CardData />
        </div>
        <div className="system__camera"></div>
        <div className="system__alarms"></div>
      </div>
    </>
  );
}
