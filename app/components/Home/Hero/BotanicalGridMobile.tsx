'use client';
import { useState, useEffect } from 'react';
import BotanicalGrid from './BotanicalGrid';

export default function BotanicalGridMobile() {
  const [visibility, setVisibility] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibility((prev) => !prev);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="-top-33.5 z-10 w-78.75 min-w-78.75 h-31.5">
      <div className={`${visibility ? 'inline' : 'hidden'}`}>
        <BotanicalGrid side="left" />
      </div>
      <div className={`${visibility ? 'hidden' : 'block'}`}>
        <BotanicalGrid side="right" />
      </div>
    </div>
  );
}
