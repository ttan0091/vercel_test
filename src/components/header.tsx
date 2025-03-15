'use client'
import React from 'react'
import Link from 'next/link'
const links = [
    {
        name: 'Performance',
        href: '/performance'
    },
    {
        name: 'Reliability',
        href: '/reliability'
    },
    {
        name: 'Scale',
        href: '/scale'
    }
]
export default function Header() {


    return (
        <div>
            <div className="absolute w-full z-10">
                <div className="flex justify-between container mx-auto text-white p-8 items-center">
                    <Link className="text-3xl font-bold" href="/">Home</Link>
                    <div className="text-xl space-x-4">
                        {links.map((link) => (
                            <Link key={link.name} className='inline-block transform hover:scale-110 transition-transform duration-200 font-bold' href={link.href}>{link.name}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
