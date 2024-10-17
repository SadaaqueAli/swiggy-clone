import React, { useState,useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function TopRest() {
  const [data, setData] = useState([]);

  const fetchTopRestaurant = async () => {
    const response = await fetch("/retaurant.json");
    const apiData = await response.json();
    setData(apiData);
    console.log(apiData)
  }

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex my-3 items-center justify-between'>
        <div className='text-[25px] font-bold'>Top Resturents chains in Karachi </div>
        <div className='flex'>
          <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] 
                                bg-[#e2e2e7] rounded-full mx-2' ><FaArrowLeft />
          </div>
          <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] 
                                bg-[#e2e2e7] rounded-full mx-2'><FaArrowRight />
          </div>
        </div>
      </div>

    </div>
  )
}
