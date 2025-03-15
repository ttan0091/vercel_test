import React from 'react'
import Image, { StaticImageData } from 'next/image'
// 不需要导入图片路径

interface IProps {
  imageUrl: StaticImageData;
  altText: string;
  title: string;
}
export default function Hero(props: IProps) {
  return (
    <div className=' h-screen relative'>
      <div className='absolute inset-0 -z-10'>
        <Image 
          src={props.imageUrl} 
          alt={props.altText}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black/50 to-transparent'></div>
      </div>
      <div className='flex justify-center pt-68'>
        <h1 className='text-white text-6xl font-bold'>{props.title}</h1>
      </div>
    </div>
  )
}  
