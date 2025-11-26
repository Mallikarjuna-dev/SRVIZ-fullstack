import React from 'react'

export default function Footer() {
  return (
    <footer className='mt-12 bg-slate-900 text-white'>
      <div className='max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4'>
        <div>© {new Date().getFullYear()} SportsTravel</div>
        <div className='text-sm text-slate-400'>
          Built as Founding Engineer assignment — responsive & component-first
        </div>
        <div className='flex gap-3'>
          <span className='bg-white/10 px-3 py-1 rounded'>FB</span>
          <span className='bg-white/10 px-3 py-1 rounded'>IG</span>
          <span className='bg-white/10 px-3 py-1 rounded'>TW</span>
        </div>
      </div>
    </footer>
  )
}
