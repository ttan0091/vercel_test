import React from 'react'
import Image, { StaticImageData } from 'next/image'

import { Button } from 'antd';
interface IProps {
    imageUrl: StaticImageData;
    altText: string;
    title: string;
}
export default function Hero(props: IProps) {
    return (
        <div>
            <Button type="primary">Click me</Button>
        </div>
    )
}  
