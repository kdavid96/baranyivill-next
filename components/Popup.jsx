import React, { useEffect, useState } from 'react'

function Popup() {
  const [isOpen, setOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, [])

  const disablePopup = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  }

  return (
    <div style={{display: isOpen ? 'flex' : 'none'}} className='w-1/2 h-1/2 text-slate-400 absolute top-1/4 left-1/4 backdrop-blur-lg flex justify-evenly items-center flex-col border-4 rounded-lg'>
      <div className='relative p-4 text-center flex flex-col items-center justify-evenly h-full'>
        <h1 className="text-red-500 font-semibold text-3xl">Figyelem!</h1>
        <p className='text-black text-xl font-normal'>Ha otthon felújítási támogatást szeretne igénybe venni villanyszerelésre, kérem kattintson a további információkért.</p>
        <div className='flex flex-col justify-center items-center gap-8'>
          <button className="rounded-lg bg-lime-400 text-white p-4" onClick={() => window.open("http://www.allamkincstar.gov.hu/hu/lakossagi-ugyfelek/otthonfelujitasi_tamogatas_altalanos_tajekoztato", "_blank")}>Érdekel</button>
          <button className="rounded-lg bg-lime-400 text-white p-4" onClick={() => disablePopup()}>Tovább az oldalra</button>
        </div>
      </div>
    </div>
  )
}

export default Popup