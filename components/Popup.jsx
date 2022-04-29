import React, { useState } from 'react'

function Popup() {
  const [isOpen, setOpen] = useState(true);

  const disablePopup = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  }

  return (
    <div style={{display: isOpen ? 'flex' : 'none'}} className='w-full text-white fixed z-50 bottom-0 left-0 backdrop-blur-lg bg-red-600 flex justify-evenly items-center flex-col shadow-lg'>
      <div className='relative p-4 text-center flex flex-col items-center justify-evenly h-full gap-8'>
        <h1 className="text-lime-400 font-semibold text-3xl">Figyelem!</h1>
        <p className='text-xl font-normal'>Ha otthon felújítási támogatást szeretne igénybe venni villanyszerelésre, kérem kattintson a további információkért.</p>
        <div className='flex justify-center items-evenly gap-8'>
          <button className="rounded-lg bg-lime-400 text-white p-4 font-medium" onClick={() => {disablePopup(); window.open("http://www.allamkincstar.gov.hu/hu/lakossagi-ugyfelek/otthonfelujitasi_tamogatas_altalanos_tajekoztato", "_blank")}}>Érdekel</button>
          <button className="rounded-lg bg-lime-400 text-white p-4" onClick={() => disablePopup()}>Tovább az oldalra</button>
        </div>
      </div>
    </div>
  )
}

export default Popup