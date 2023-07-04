import React from 'react'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import { useCustomHooks } from './GlobalProvider'

const ThemeToggle = () => {

 const {allFeature} = useCustomHooks()
 const {toggle, theToggleFun} = allFeature
  return (
    <div className=' container mx-auto p-2'>
      <div className=' flex justify-end p-2'>
      <button className='' onClick={theToggleFun}>
        {toggle ? <BsFillSunFill size={20} className=' text-yellow-400' /> : <BsFillMoonFill size={20} className=' text-gray-400' /> }
      </button>
      </div>
    </div>
  )
}

export default ThemeToggle