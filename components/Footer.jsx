import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col lg:flex-row items-center p-3 bg-lime-400 rounded-lg'>
        <div class="mapouter flex-1 w-full lg:w-auto">
            <div class="gmap_canvas">
                <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=M%C3%A1riahegy%20304,%20Kecskem%C3%A9t,%206000&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </div>
        <div className='flex-1 px-3 box-border w-full lg:w-auto'>
            <li className="list-none p-4 align-left text-white text-xl cursor-pointer"><span className="font-semibold">Telefon:</span> +36 30 699 11 26</li>
            <li className="list-none p-4 align-left text-white text-xl cursor-pointer"><span className="font-semibold">Email:</span> baranyiepuletvill@gmail.com</li>
            <li className="list-none p-4 align-left text-white text-xl cursor-pointer"><span className="font-semibold">Facebook:</span> /baranyiepuletvill</li>
        </div>
    </div>
  )
}

export default Footer