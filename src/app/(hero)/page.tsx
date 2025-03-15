import React from 'react'
import Hero from '@/components/hero'
import homeImage from '../../../public/home.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home',
}
export default function Page() {
    return (
        <div>
            <Hero imageUrl={homeImage} altText={'Home'} title={'Professional Cloud Hosting'} />

        </div>

    )
}  
