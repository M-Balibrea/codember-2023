/** @format */

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Challenge01 from './challenges/Challenge_01'

const CHALLENGES = {
  c01: {
    component: Challenge01,
    title: 'Challenge 01',
  },
}

function App() {
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <h1>Codember 2023</h1>
      </div>
      <div className='card'>
        <Challenge01 />
      </div>
    </>
  )
}

export default App
