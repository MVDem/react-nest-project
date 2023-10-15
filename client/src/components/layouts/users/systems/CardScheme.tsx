import { useEffect, useState } from 'react';

export function CardScheme() {
  const [switch1, setSwitch1] = useState<boolean>(true);
  const [switch2, setSwitch2] = useState<boolean>(true);
  const [switchS, setSwitchS] = useState<boolean>(true);

  return (
    <>
      <div className="scheme">
        <h3 className="scheme__title">Scheme</h3>
        <div className="scheme__content">
          <div className="scheme__switchA">
            <p>
              <span>1</span>
            </p>
          </div>
          <div className="scheme__switchB">
            <p>
              <span>1</span>
            </p>
          </div>
          <div className="scheme__switchC">
            <p>
              <span>1</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
