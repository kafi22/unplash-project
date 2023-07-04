import React, { useState } from 'react'
import { useCustomHooks } from './GlobalProvider'

const SearchForm = () => {

 const {allFeature} = useCustomHooks()

 const {setSearch} = allFeature

  const submitForm = (e) => {
    e.preventDefault()
    // console.log(e.target.elements.search.value);
    const searchValue = e.target.elements.search.value
    if(!searchValue) return
      setSearch(searchValue)    
  }
  return (
    <div className=' container mx-auto p-2 '>
      <h1 className=' text-center text-3xl'>Unplash Image</h1>
      
      <div className=' my-5 w-full flex justify-center '>
      <form action="" className=' flex justify-center gap-4 items-center w-full' onSubmit={submitForm}>
        <input type="text" placeholder='cat'
         className=' h-10 w-[40%] bg-slate-200 p-2'
          name='search'
         />
        <button className=' h-10 bg-blue-500 w-36  font-normal leading-7' type='submit'>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default SearchForm