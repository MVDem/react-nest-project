import { useEffect, useState } from 'react';
import CircleProgress from './CircleProgress';

export function CardCurrent() {
  const [percent1A, setPercentage1A] = useState<number>(0);
  const [percent1B, setPercentage1B] = useState<number>(0);
  const [percent1C, setPercentage1C] = useState<number>(0);
  const [percent2A, setPercentage2A] = useState<number>(0);
  const [percent2B, setPercentage2B] = useState<number>(0);
  const [percent2C, setPercentage2C] = useState<number>(0);

  const percentage1A: number = percent1A ? percent1A : 0;
  const percentage1B: number = percent1B ? percent1B : 0;
  const percentage1C: number = percent1B ? percent1C : 0;
  const percentage2A: number = percent2A ? percent2A : 0;
  const percentage2B: number = percent2B ? percent2B : 0;
  const percentage2C: number = percent2C ? percent2C : 0;
  const radius: number = 30;

  return (
    <>
      <div className="current">
        <h3 className="current__title">Current</h3>
        <div className="current__content">
          <div>
            <h5>Input 1</h5>
            <div className="current__value">
              <div>
                <CircleProgress radius={radius} percentage={percentage1A} />
                <p>{35}А</p>
              </div>
              <div>
                <CircleProgress radius={radius} percentage={percentage1B} />
                <p>{35}А</p>
              </div>
              <div>
                <CircleProgress radius={radius} percentage={percentage1C} />
                <p>{35}А</p>
              </div>
            </div>
          </div>
          <div>
            <h5>Input 2</h5>
            <div className="current__value">
              <div>
                <CircleProgress radius={radius} percentage={percentage2A} />
                <p>{35}А</p>
              </div>
              <div>
                <CircleProgress radius={radius} percentage={percentage2B} />
                <p>{35}А</p>
              </div>
              <div>
                <CircleProgress radius={radius} percentage={percentage2C} />
                <p>{35}А</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
