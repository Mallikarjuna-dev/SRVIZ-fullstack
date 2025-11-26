import React from 'react'

const PACKAGES = [
  {
    id: 1,
    title: 'Wimbledon',
    price: 'Starting ₹1,25,000',
    img: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    title: 'NBA Finals',
    price: 'Starting ₹1,50,000',
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    title: 'Athens 2024',
    price: 'Starting ₹95,000',
    img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    title: 'F1 Monaco',
    price: 'Starting ₹3,50,000',
    img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=60',
  },
]

export default function Packages({ onEnquire }) {
  return (
    <section id='packages' className='py-10'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>Top Packages</h2>
        <a className='text-sm font-medium text-blue-400'>View all packages →</a>
      </div>

      <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {PACKAGES.map((p) => (
          <article
            key={p.id}
            className='bg-white rounded-lg shadow-soft overflow-hidden hover:shadow-card transition'
          >
            <div className='h-40 overflow-hidden'>
              <img
                src={p.img}
                alt={p.title}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='p-4'>
              <h3 className='font-semibold'>{p.title}</h3>
              <p className='mt-1 text-sm text-slate-500'>{p.price}</p>

              <div className='mt-4 flex items-center justify-between'>
                <button
                  onClick={onEnquire}
                  className='px-3 py-1 rounded-full bg-accent text-white text-sm'
                >
                  Enquire
                </button>
                <a className='text-sm text-slate-600'>Details</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
