import React, { useState, useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from './Card';

export default function TopRest() {
  const [data, setData] = useState([]);
  const [slide , setSlide] = useState(0);

  const fetchTopRestaurant = async () => {
    const response = await fetch("/retaurant.json");
    const apiData = await response.json();
    console.log(apiData.length)
    setData(apiData);
  }

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  const nextSlide = () => {
    if (data.length - 8 == slide) return false
    setSlide(slide + 1);
}

const prevSlide = () => {
    if (slide == 0) return false
    setSlide(slide - 1);
}

  return (
    <div className='max-w-[1200px] mx-auto mb-[100px]'>
      <div className='flex my-3 items-center justify-between'>
        <div className='text-[25px] font-bold'>Top Resturents chains in Karachi </div>
        <div className='flex'>
          <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] 
                                bg-[#e2e2e7] rounded-full mx-2' ><FaArrowLeft onClick={prevSlide} />
          </div>
          <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] 
                                bg-[#e2e2e7] rounded-full mx-2'><FaArrowRight onClick={nextSlide}/>
          </div>
        </div>
      </div>
      <div className='flex gap-8 overflow-hidden'>
      <div className='flex gap-8' style={{
          transform: `translateX(-${slide * 30}%)`, // Change this to slide accordingly
          transition: 'transform 0.5s ease'
        }}>
          {data.map((d, i) => (
            <Card {...d} key={i} className='shrink-0' />
          ))}
        </div>
      </div>
    </div>
  )
}
