import React, { useState, useEffect } from 'react';
import Card from './Card';

export default function OnlineDelivery() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true); // Initially, loader is true

  const fetchTopRestaurant = async () => {
    const response = await fetch("/retaurant.json");
    const apiData = await response.json();
    setData(apiData);

    // Delay the loader for a few seconds
    setTimeout(() => {
      setLoader(false); // After delay, hide the loader
    }, 3000); // 3000ms = 3 seconds
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex my-3 items-center justify-between'>
        <div className='text-[25px] font-bold'>Top Restaurants OnlineDelivery in Karachi</div>
      </div>

      {loader ? (
        <div className="flex justify-center items-center">
          <img src="/images/loader.gif" alt="Loading..." className="w-[50px] h-[50px]" />
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3'>
          {data.map((d, i) => (
            <Card width="w-full md:w-[273px]" key={i} {...d} />
          ))}
        </div>
      )}
    </div>
  );
};
