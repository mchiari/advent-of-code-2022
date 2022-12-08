import React, { useEffect } from 'react'
import "../src/index.css"
import { day1, day2, day3, day4, day5 } from './days'

const App = () => {


  day5()


  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen text-blue-500 font-mono'>

      <div className='flex flex-col justify-center items-center '>

        <span className='flex flex-col p-4 w-full text-xl font-bold'>
          Advent of code 2022
        </span>

        <ul className='flex flex-col w-5/6 list-disc py-4'>
          <li className='list-outside font-semibold'>Day 1</li>
          <li className='flex flex-grow justify-between list-none'><span>- part 1: 68787</span> <span>⭐</span></li>
          <li className='flex flex-grow justify-between list-none'><span>- part 2: 198041</span> <span>⭐</span></li>
        </ul>

        <ul className='flex flex-col w-5/6 list-disc py-4'>
          <li className='list-outside font-semibold'>Day 2</li>
          <li className='flex flex-grow justify-between list-none'><span>- part 1: 10624</span> <span>⭐</span></li>
          <li className='flex flex-grow justify-between list-none'><span>- part 2: 14060</span> <span>⭐</span></li>
        </ul>


        <ul className='flex flex-col w-5/6 list-disc py-4'>
          <li className='list-outside font-semibold'>Day 3</li>
          <li className='flex flex-grow justify-between list-none'><span>- part 1: 8298</span> <span>⭐</span></li>
          <li className='flex flex-grow justify-between list-none'><span>- part 2: 2708</span> <span>⭐</span></li>
        </ul>

        <ul className='flex flex-col w-5/6 list-disc py-4'>
          <li className='list-outside font-semibold'>Day 4</li>
          <li className='flex flex-grow justify-between list-none'><span>- part 1: 588</span> <span>⭐</span></li>
          <li className='flex flex-grow justify-between list-none'><span>- part 2: 911</span> <span>⭐</span></li>
        </ul>

        <ul className='flex flex-col w-5/6 list-disc py-4'>
          <li className='list-outside font-semibold'>Day 5</li>
          <li className='flex flex-grow justify-between list-none'><span>- part 1: JRVNHHCSJ</span> <span>⭐</span></li>
          <li className='flex flex-grow justify-between list-none'><span>- part 2: </span> <span>⭐</span></li>
        </ul>

      </div>
    </div>
  )
}

export default App

