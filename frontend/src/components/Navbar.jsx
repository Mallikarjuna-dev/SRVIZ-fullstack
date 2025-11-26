import React, { useState } from 'react'

export default function Navbar({ onCTAClick }) {
  const [open, setOpen] = useState(false)
  return (
    <header className='fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='h-16 flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <div className='text-2xl font-extrabold text-slate-900'>
              SPORTS<span className='sm-hidden text-accent'>TRAVEL</span>
            </div>
            <nav className='hidden md:flex pl-28 gap-8 text-md font-semibold text-slate-600'>
              <a href='#packages' className='hover:text-slate-900'>
                Top packages
              </a>
              <a href='#how' className='hover:text-slate-900'>
                How it works
              </a>
              <a href='#itinerary' className='hover:text-slate-900'>
                Itinerary
              </a>
            </nav>
          </div>

          <div className='flex items-center gap-3'>
            <button
              onClick={onCTAClick}
              className='hidden md:inline-flex items-center px-8 py-2 rounded-full bg-orange-600 text-white font-semibold shadow'
            >
              Plan My Trip
            </button>

            <button
              className='md:hidden p-2'
              onClick={() => setOpen(!open)}
              aria-label='menu'
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className='md:hidden border-t bg-white'>
          <div className='px-4 py-4 flex flex-col gap-3'>
            <a href='#packages' onClick={() => setOpen(false)}>
              Top packages
            </a>
            <a href='#how' onClick={() => setOpen(false)}>
              How it works
            </a>
            <a href='#itinerary' onClick={() => setOpen(false)}>
              Itinerary
            </a>
            <button
              onClick={() => {
                setOpen(false)
                onCTAClick()
              }}
              className='mt-2 px-4 py-2 rounded-full bg-accent text-white'
            >
              Plan My Trip
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
