import { useEffect, useState } from 'react';

export default function ClockDate() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  });

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const addLeadingZero = (e: number) => {
    return e < 10 ? '0' + e : e;
  };

  const day = days[time.getDay()];
  const date = addLeadingZero(time.getDate());
  const month = addLeadingZero(time.getMonth());
  const year = time.getFullYear();
  const hours = addLeadingZero(time.getHours());
  const minutes = addLeadingZero(time.getMinutes());

  const timeString = `${day} ${date}.${month}.${year} - ${hours}:${minutes}`;

  return <p>{timeString}</p>;
}
