import React from 'react'
import Image from 'next/image'

function Services() {
  return (
    <div id="services" className='p-6 flex justify-center align-center flex-col'>
        <span className='my-0 mx-auto relative px-12 py-4 bg-lime-400 rounded-2xl text-white font-semibold'>Szolgáltatásaink</span>
        <div className='relative p-8 text-center rounded-lg shadow-lg grid grid-cols-1 grid-rows-3'>
            <div className='flex flex-col justify-center align-center p-8 bg-gray-200 rounded-lg m-4 bg-opacity-30'>
                <p className='font-bold text-2xl mb-8'>Lakossági villanyszerelés</p>
                <ul className='font-normal text-md'>
                    <li className='mb-4'>Hibakeresés, hibaelhárítás</li>
                    <li className='mb-4'>Meglévő épületek elektromos hálózatának karbantartását, felújítását, lakáselosztó cseréjét</li>
                    <li className='mb-4'>Új lakó ingatlanok villamos hálózatának tervezését</li>
                    <li className='mb-4'>Családiházak teljeskörű villamos hálózatának tervezését és kivitelezését</li>
                    <li className='mb-4'>Villamos fogyasztásmérőhely tervezését, mindennemű ügyintézését és kivitelezését</li>
                    <li className='mb-4'>Világítás korszerűsítést, design világítás azaz LED technológiára való átállást</li>
                    <li className='mb-4'>Infrafilm és fűtőkábeles elektromos fűtés kivitelezését</li>
                    <li className='mb-4'>Nagy háztartási gépek beüzemelését (elektromos főzőlap, sütő stb.)</li>
                    <li className='mb-4'>Kapunyitó motorok beüzemelését</li>
                    <li className='mb-4'>Mérést és jegyzőkönyvezést (pl.: érintésvédelmi felülvizsgálatot)</li>
                </ul>
            </div>
            <div className='flex flex-col justify-center align-center p-16 bg-gray-200 rounded-lg m-4 bg-opacity-30'>
                <p className='font-bold text-2xl mb-8'>Ipari villanyszerelés</p>
                <ul className='font-normal text-md'>
                    <li className='mb-4'>Hibakeresés, hibaelhárítás</li>
                    <li className='mb-4'>Meglévő ipari létesítmény elektromos hálózatának karbantartását, korszerűsítését</li>
                    <li className='mb-4'>Új ipari létesítmények villamos hálózatának tervezését és kivitelezését</li>
                    <li className='mb-4'>Világítás korszerűsítést azaz LED technológiára való átállást</li>
                    <li className='mb-4'>Üzemi gépek beüzemelését</li>
                    <li className='mb-4'>Ipari elosztó szekrényeket</li>
                    <li className='mb-4'>Mérést és jegyzőkönyvezést (pl.: érintésvédelmi felülvizsgálatot)</li>
                </ul>
            </div>
            <div className='flex flex-col justify-center align-center p-8 bg-gray-200 rounded-lg m-4 bg-opacity-30'>
                <p className='font-bold text-2xl mb-8'>Tervezés</p>
                <ul className='font-normal text-md'>
                    <li className='mb-4'>Hibakeresés, hibaelhárítás</li>
                    <li className='mb-4'>Meglévő épületek elektromos hálózatának karbantartását, felújítását, lakáselosztó cseréjét</li>
                    <li className='mb-4'>Új lakó ingatlanok villamos hálózatának tervezését</li>
                    <li className='mb-4'>Családiházak teljeskörű villamos hálózatának tervezését és kivitelezését</li>
                    <li className='mb-4'>Villamos fogyasztásmérőhely tervezését, mindennemű ügyintézését és kivitelezését</li>
                    <li className='mb-4'>Világítás korszerűsítést, design világítás azaz LED technológiára való átállást</li>
                    <li className='mb-4'>Infrafilm és fűtőkábeles elektromos fűtés kivitelezését</li>
                    <li className='mb-4'>Nagy háztartási gépek beüzemelését (elektromos főzőlap, sütő stb.)</li>
                    <li className='mb-4'>Kapunyitó motorok beüzemelését</li>
                    <li className='mb-4'>Mérést és jegyzőkönyvezést (pl.: érintésvédelmi felülvizsgálatot)</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Services