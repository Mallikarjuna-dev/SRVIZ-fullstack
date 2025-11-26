import React from 'react'

const CARDS = [
  {
    title: 'Hospitality Pass',
    img: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Meet & Greet',
    img: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Exclusive Drive',
    img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'City Tour',
    img: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=60',
  },
]

export default function Itinerary() {
  return (
    <section id='itinerary' className='py-10'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>Sample Itinerary</h2>
        <a className='text-sm text-slate-500'>Explore →</a>
      </div>

      <div className='mt-6 flex gap-4 overflow-x-auto hide-scrollbar py-2'>
        {CARDS.map((c, i) => (
          <div
            key={i}
            className='min-w-[260px] bg-white rounded-lg shadow-soft overflow-hidden'
          >
            <img
              src={c.img}
              className='w-full h-36 object-cover'
              alt={c.title}
            />
            <div className='p-3'>
              <div className='font-semibold'>{c.title}</div>
              <div className='mt-2 text-sm text-slate-600'>
                Brief description of the experience
              </div>
              <div className='mt-3 flex gap-2'>
                <span className='px-2 py-1 bg-slate-100 rounded-full text-sm'>
                  Private
                </span>
                <span className='px-2 py-1 bg-slate-100 rounded-full text-sm'>
                  Add-on
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
