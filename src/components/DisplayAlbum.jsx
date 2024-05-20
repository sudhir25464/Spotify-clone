import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'
const DisplayAlbum = () => {
  const { id } = useParams();

  const albumData = albumsData[id];
  console.log(albumData);
  return (
    <>
      <Navbar />
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:item-end'>
        <img className='w-48 rounded ' src={albumData.image} alt='' />

        <div className='flex flex-col'>
          <p>Playlist</p>
          <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
          <h4 className='mt-1'>
            <img className='inline-block w-5 ' src={assets.spotify_logo} alt='' />
            <b>Spotify</b>
            .1,121 likes
            <b>50 songs </b>
            about 2 hour 5 min
          </h4>
        </div>

      </div>
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-white'>
        <p><b className='mt-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'> Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt=''></img>
      </div>
      <hr/>
      {
        songsData.map((item, index)=>(
          <div key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 item-center text-white hover:bg-[#ffffff26]'>
          
          <p className='text-white'>
            <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
            <img className='inline  mr-5 w-10' src={item.image} alt='' />
         {item.name}
          </p>
          <p className='text-[15px]'>{albumData.name}</p>
          <p className='text-[15px] hidden sm:block'> 2 day ago</p>
          <p className='text-[15px] text-center'>{item.duration}</p>
          </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum
