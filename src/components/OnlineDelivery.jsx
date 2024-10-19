import React, { useState, useEffect } from 'react'
import Card from './Card';

export default function OnlineDelivery() {

  const [data, setData] = useState([]);

  const fetchTopRestaurant = async () => {
    const response = await fetch("/retaurant.json");
    const apiData = await response.json();
    console.log(apiData.length)
    setData(apiData);
  }

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  return (
    <div className='max-w-[1200px] mx-auto mb-[100px]'>
      <div className='flex my-3 items-center justify-between'>
        <div className='text-[25px] font-bold'>Top Resturents online OnlineDelivery in Karachi </div>
      </div>
      <div className=' grid grid-cols-4 gap-3'>
        {
          data.map(
            (d, i) => {
              return <Card {...d} />
            }
          )
        }
      </div>
      <hr className='my-6 border-[1px]' />
    </div>
  )
}

