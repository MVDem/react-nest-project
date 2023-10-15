import { useEffect, useState } from 'react';

export function CardVoltage() {
  const [volt1a, setVolt1a] = useState(0);
  const [volt1b, setVolt1b] = useState(0);
  const [volt1c, setVolt1c] = useState(0);
  const [volt2a, setVolt2a] = useState(0);
  const [volt2b, setVolt2b] = useState(0);
  const [volt2c, setVolt2c] = useState(0);

  return (
    <>
      <div className="voltage">
        <h3 className="voltage__title">Voltage</h3>
        <div>
          <h5>Input 1</h5>
          <div className="voltage__value">
            <div>
              <p>{volt1a}B</p>
            </div>
            <div>
              <p>{volt1b}B</p>
            </div>
            <div>
              <p>{volt1c}B</p>
            </div>
          </div>
        </div>
        {
          <div>
            <h5>Input 2</h5>
            <div className="voltage__value">
              <div>
                <p>{volt2a}B</p>
              </div>
              <div>
                <p>{volt2b}B</p>
              </div>
              <div>
                <p>{volt2c}B</p>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
}
