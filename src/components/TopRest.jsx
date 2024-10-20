import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from './Card';

export default function TopRest() {
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState(0);

  // Fetch the top restaurant data
  const fetchTopRestaurant = async () => {
    try {
      const response = await fetch("/retaurant.json"); // Check the spelling here ("restaurant.json" instead of "retaurant.json" if that's a typo)
      if (!response.ok) throw new Error('Failed to fetch data');
      const apiData = await response.json();
      setData(apiData);
    } catch (error) {
      console.error('Error fetching restaurant data:', error); // Log errors for debugging
    }
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  // Next slide function
  const nextSlide = () => {
    if (slide >= data.length - 8) return; // Avoid sliding past the last item
    setSlide(slide + 1);
  };

  // Previous slide function
  const prevSlide = () => {
    if (slide <= 0) return; // Avoid sliding past the first item
    setSlide(slide - 1);
  };

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex my-3 items-center justify-between'>
        <div className='text-[25px] font-bold'>Top Restaurants Chains in Karachi</div>
        <div className='flex'>
          {/* Left Arrow */}
          <div
            className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          {/* Right Arrow */}
          <div
            className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      {/* Card Slider */}
      <div className='flex gap-8 overflow-hidden'>
        <div
          className='flex gap-8'
          style={{
            transform: `translateX(-${slide * 5}%)`, // Adjust the sliding distance
            transition: 'transform 0.5s ease' // Smooth sliding transition
          }}
        >
          {data.map((d, i) => (
            <Card {...d} key={i} className='shrink-0' />
          ))}
        </div>
      </div>
      <hr className='my-6 border-[1px]' />
    </div>
  );
}
