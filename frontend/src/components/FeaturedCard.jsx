import React from 'react'

export default function FeaturedCard({ onEnquire }) {
  return (
    <section className='-mt-20 mb-10'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='bg-white rounded-xl shadow-card overflow-hidden md:flex items-center'>
          <div className='md:w-1/2'>
            <img
              src='https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=60'
              alt='f1'
              className='w-full h-48 md:h-full object-cover'
            />
          </div>
          <div className='p-6 md:w-1/2'>
            <div className='flex items-center justify-between'>
              <div>
                <div className='text-sm text-slate-500'>FEATURED EVENT</div>
                <h3 className='text-2xl font-bold mt-1'>
                  F1 JAPAN — Suzuka Circuit
                </h3>
              </div>
              <div className='flex flex-col items-end'>
                <div className='text-sm font-bold text-slate-600'>
                  Starting from
                </div>
                <div className='text-xl font-bold text-accent'>₹ 1,80,000</div>
              </div>
            </div>

            <p className='mt-4 text-slate-600'>
              Premium race seats, 3 nights stay, airport transfers and curated
              city tours included.
            </p>

            <div className='mt-6 flex items-center gap-3'>
              <button
                onClick={onEnquire}
                className='px-4 py-2 bg-accent text-white rounded-full font-semibold'
              >
                Request my package
              </button>
              <a className='px-4 py-2 border bg-orange-600 rounded-full text-white font-semibold'>
                More details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
