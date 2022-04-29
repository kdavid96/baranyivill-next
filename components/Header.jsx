import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ReactTooltip from 'react-tooltip'
import Hamburger from 'hamburger-react'

import { getCategories } from '../services'

const Header = () => {
    const [categories, setCategories] = useState([]);
    const [clientWindowHeight, setClientWindowHeight] = useState("");
    const [isMounted,setIsMounted] = useState(false);
    const [isOpen, setOpen] = useState(false);


    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    }

    useEffect(() => {
        setIsMounted(true);
        getCategories()
        .then((newCategories) => setCategories(newCategories))

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll) 
    }, [])

    return (
        <div className='sticky top-0 z-50 mx-auto px-10 mb-4 lg:mb-32 bg-white'>
            <div className='border-b-1 w-full flex items-center justify-between border-b py-8 relative'>
                <div className='md:float-left block'>
                    <Link href="/">
                        <span className={clientWindowHeight > 200 ? 'cursor-pointer font-bold text-2xl text-lime-400' : 'cursor-pointer font-bold text-2xl text-transparent'}>
                            Baranyi Épületvillamosság
                        </span>
                    </Link>
                </div>
                <div className={"hidden lg:block absolute top-2 left-1/2 -translate-x-1/2 bg-white rounded-full border-4 border-lime-400"}>
                    <Image alt="Baranyi Épületvillamosság - Villanyszerelés okosan Kecskeméten és környékén" src="/images/logo_official.webp" width='200px' height='200px' />
                </div>
                <div className='hidden lg:flex flex-row justify-end align-center gap-3'>    
                    <span className='cursor-pointer px-4 py-2 text-white bg-lime-400 rounded-lg' data-for={"mytip"} data-tip="+36 30 699 11 26"><a href='tel:+36306991126'>Telefon</a></span>
                    <span className='cursor-pointer px-4 py-2 text-white bg-lime-400 rounded-lg' data-for={"mytip"} data-tip="baranyiepuletvill@gmail.com"><a href='mailto:baranyiepuletvill@gmail.com'>Email</a></span> 
                    <span className='cursor-pointer px-4 py-2 text-white bg-lime-400 rounded-lg' data-for={"mytip"} data-tip="/baranyiepuletvill"><a href="https://www.facebook.com/baranyiepuletvill" target='_blank'>Facebook</a></span> 
                </div>
                <div className='block lg:hidden relative float-right'>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </div>
            {isMounted && <ReactTooltip id={"mytip"} effect={"solid"} />}
            <div style={{"display": isOpen ? 'flex' : 'none'}} className='w-full p-3 absolute top-30 right-0 bg-lime-50 rounded-lg shadow-md flex flex-col gap-4'>
                <span className='cursor-pointer px-4 py-2 text-white bg-lime-400 rounded-lg' data-for={"mytip"} data-tip="+36 30 699 11 26">Telefon</span>
                <span className='cursor-pointer px-4 py-2 text-white bg-lime-400 rounded-lg' data-for={"mytip"} data-tip="/baranyiepuletvill">Facebook</span> 
                <span className='cursor-pointer px-4 py-2 text-white bg-lime-400 rounded-lg' data-for={"mytip"} data-tip="baranyiepuletvill@gmail.com">Email</span> 
            </div>
        </div>
    )
}

export default Header