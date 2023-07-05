import axios from 'axios';
import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { useCustomHooks } from './GlobalProvider';

const Gallery = () => {

 const {allFeature} = useCustomHooks()
 const {search} = allFeature

  const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`;


  const response =  useQuery({

    queryKey : ['unplash', search],
    queryFn : async () => {
      const result = await axios.get(`${url}&query=${search}`)
      return result.data
    }

  })

  console.log(response);

  if(response.isLoading) {
    return <div className=' container mx-auto py-6 text-2xl text-red-500'>
      <h2 className=' text-center'>Loading...</h2>
    </div>
  }

  if(response.isError) {
    return <div className=' container mx-auto py-4'>
      <h2 className=' text-center text-red-600'>There was an error</h2>
    </div>
  }


  const getAllImages = response?.data?.results?.map(item => {
      const imgUrl = item?.urls?.regular
    return <img src={imgUrl} alt="images" key={item.id} className=' h-auto w-full object-cover rounded-md' />
  })


  return (
    <div  className=' container mx-auto p-2 grid grid-cols-1 gap-4'>
      {getAllImages}
    </div>
  )
}

export default Gallery