import React from 'react'

function Footer() {
  return (
    <div className='w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 md:grid-rows-1 items-center bg-lime-400 p-3'>
        <div className="mapouter flex-1 w-full col-span-1 lg:col-span-3">
            <div className="gmap_canvas">
                <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=M%C3%A1riahegy%20304,%20Kecskem%C3%A9t,%206000&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>
        </div>
        <div className='flex-1 box-border w-full'>
            <li className="list-none p-4 align-left text-white text-xl cursor-pointer"><a href='tel:+6306991126'><span className="font-semibold">Telefon:</span> +36 30 699 11 26</a></li>
            <li className="list-none p-4 align-left text-white text-xl cursor-pointer"><a href='mailto:baranyiepuletvill@gmail.com'><span className="font-semibold">Email:</span> baranyiepuletvill@gmail.com</a></li>
            <li className="list-none p-4 align-left text-white text-xl cursor-pointer"><a href='https://www.facebook.com/baranyiepuletvill' target='_blank'><span className="font-semibold">Facebook:</span> /baranyiepuletvill</a></li>
        </div>
    </div>
  )
}

export default Footer