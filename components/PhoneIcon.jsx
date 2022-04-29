import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ReactTooltip from 'react-tooltip'
import Hamburger from 'hamburger-react'
import { BsTelephone } from 'react-icons/bs'

const PhoneIcon = () => {
    return (
        <div style={{zIndex: 60}} className='fixed bottom-8 right-8 rounded-full bg-lime-400 text-white w-16 h-16 flex justify-center items-center text-center cursor-pointer border-4 border-lime-600'>
            <a className="relative block w-3/4" href='tel:+36306991126'><BsTelephone className="relative w-full h-full" /></a> 
        </div>
    )
}

export default PhoneIcon