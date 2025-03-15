import React from 'react'
import Hero from '@/components/hero'
import homeImage from '../../../../public/scale.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Scale',
}
export default function Page() {
    return (
        <div>
            <Hero imageUrl={homeImage} altText={'Scale'} title={'Scale'}  />
        </div>
    )
}
