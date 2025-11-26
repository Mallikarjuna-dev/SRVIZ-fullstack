import React from 'react'

export default function Hero({ onPrimaryClick }) {
  return (
    <section className='relative h-[640px] md:h-[720px]'>
      <div className='absolute inset-0'>
        <img
          src='https://images.unsplash.com/photo-1505842465776-3b4953ca4f44?auto=format&fit=crop&w=1600&q=60'
          alt='mountain hero'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent'></div>
      </div>

      <div className='relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col justify-center'>
        <div className='text-center md:text-left max-w-3xl'>
          <div className='text-3xl text-slate-200 font-medium tracking-widest'>
            SPORTS
          </div>
          <h1 className='mt-4 text-white text-4xl md:text-6xl font-bold leading-tight'>
            SPORTS TRAVEL PACKAGES FOR <br className='hidden md:block' /> GLOBAL
            EVENTS
          </h1>
          <p className='mt-4 text-slate-200 font-semibold max-w-2xl'>
            Curated packages for F1, Wimbledon, NBA & more — tickets, hotels and
            VIP experiences handled.
          </p>

          <div className='mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start'>
            <button
              onClick={onPrimaryClick}
              className='px-6 py-3 rounded-full bg-orange-600 text-white font-semibold shadow-lg'
            >
              Plan My Trip
            </button>
            <a
              href='#packages'
              className='px-6 py-3 rounded-full border border-white/30 text-white font-semibold'
            >
              View Packages
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
