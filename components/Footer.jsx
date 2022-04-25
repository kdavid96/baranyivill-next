import React from 'react'

function Footer() {
  return (
    <div className='w-full flex flex-col lg:flex-row items-center bg-lime-400 p-3'>
        <div class="mapouter flex-1 w-full lg:w-auto">
            <div class="gmap_canvas">
                <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=M%C3%A1riahegy%20304,%20Kecskem%C3%A9t,%206000&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>
        </div>
        <div className='flex-1 box-border w-full lg:w-auto'>
            <li className="list-none p-4 align-left text-white text-xl cursor-pointer"><a href='tel:+6306991126'><span className="font-semibold">Telefon:</span> +36 30 699 11 26</a></li>
            <li className="list-none p-4 align-left text-white text-xl cursor-pointer"><a href='mailto:baranyiepuletvill@gmail.com'><span className="font-semibold">Email:</span> baranyiepuletvill@gmail.com</a></li>
            <li className="list-none p-4 align-left text-white text-xl cursor-pointer"><a href='https://www.facebook.com/baranyiepuletvill' target='_blank'><span className="font-semibold">Facebook:</span> /baranyiepuletvill</a></li>
        </div>
    </div>
  )
}

export default Footer