import React from 'react'

const ADDONS = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=60',
    title: 'VIP Lounge',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=800&q=60',
    title: 'Driver & Car',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1505238680356-667803448bb6?auto=format&fit=crop&w=800&q=60',
    title: 'Guided City Tour',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=60',
    title: 'Restaurant Dinners',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60',
    title: 'Museum Passes',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1519972574790-002c3b5f6bfd?auto=format&fit=crop&w=800&q=60',
    title: 'Photo Session',
  },
]

export default function AddOnsAndContact({ onEnquire }) {
  return (
    <section className='py-10'>
      <div className='grid md:grid-cols-3 gap-6'>
        <div className='md:col-span-2'>
          <h3 className='text-xl font-bold'>Add-ons & VIP Experiences</h3>
          <p className='text-sm text-slate-600 mt-1'>
            Enhance your trip with exclusive options.
          </p>

          <div className='mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4'>
            {ADDONS.map((a) => (
              <div
                key={a.id}
                className='bg-white rounded-lg overflow-hidden shadow-soft'
              >
                <img
                  src={a.img}
                  alt={a.title}
                  className='w-full h-28 object-cover'
                />
                <div className='p-3'>
                  <div className='font-semibold'>{a.title}</div>
                  <div className='mt-2 text-sm text-slate-600 flex items-center justify-between'>
                    <span className='text-xs px-2 py-1 bg-slate-100 rounded-full'>
                      Popular
                    </span>
                    <button
                      onClick={onEnquire}
                      className='text-xs px-3 py-1 rounded-full bg-accent text-white'
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className='bg-white p-6 rounded-lg shadow-soft'>
          <h4 className='font-bold text-xl'>Contact</h4>
          <p className='text-sm text-slate-600 mt-1'>
            Leave details & we’ll get in touch.
          </p>

          <form
            className='mt-4 space-y-3'
            onSubmit={(e) => {
              e.preventDefault()
              onEnquire()
            }}
          >
            <input
              name='name'
              placeholder='Name'
              className='w-full border rounded p-2'
            />
            <input
              name='email'
              placeholder='Email'
              className='w-full border rounded p-2'
            />
            <input
              name='phone'
              placeholder='Phone'
              className='w-full border rounded p-2'
            />
            <textarea
              name='msg'
              placeholder='Message'
              className='w-full border rounded p-2'
              rows='3'
            ></textarea>
            <button
              type='submit'
              className='w-full px-4 py-2 rounded-full bg-orange-600 text-white font-semibold'
            >
              Send enquiry
            </button>
          </form>

          <div className='mt-4 text-sm text-slate-500'>
            <div>
              <strong>Office:</strong> +91 88X-XXX-XXXX
            </div>
            <div className='mt-1'>Follow us: FB · IG · TW</div>
          </div>
        </aside>
      </div>
    </section>
  )
}
