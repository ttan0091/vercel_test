import React from 'react'
import Hero from '@/components/hero'
import homeImage from '../../../../public/reliability.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Reliability',
}
export default function Page() {
  return (
    <div>
      <Hero imageUrl={homeImage} altText={'Reliability'} title={'Reliability'}  />
    </div>
  )
}
