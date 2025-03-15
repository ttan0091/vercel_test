import React from 'react'
import Hero from '@/components/hero'
import homeImage from '../../../../public/performance.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Performance',
}
export default function Page() {
    return (
        <div>
        <Hero imageUrl={homeImage} altText={'Performance'} title={'Performance'}  />
    </div>
  )
}
