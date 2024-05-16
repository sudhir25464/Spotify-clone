import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'

const DisplayAlbum = () => {
    const {id} = useParams();
   
    const albumData = albumData[id];
    console.log(albumData);
  return (
   <>
   <Navbar/>
   <div className='mt-10 flex gap-8 flex-col md:flex-row md:item-end'>
    <img className='w-48 rounded ' src={albumData.image} alt=''/>
   
  
   </div>
   </>
  )
}

export default DisplayAlbum
