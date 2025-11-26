import React from 'react'

const STATS = [
  { label: 'Trips Planned', value: '12,000+' },
  { label: 'On-time Transfers', value: '98%' },
  { label: 'Local Experiences', value: '4,500+' },
]

export default function WhyChooseUs() {
  return (
    <section className='py-10'>
      <div className='grid md:grid-cols-2 gap-8 items-center'>
        <div>
          <h2 className='text-2xl font-bold'>Why choose us</h2>
          <p className='mt-3 text-slate-600'>
            We combine local partners and experienced travel managers to deliver
            seamless sports experiences.
          </p>

          <div className='mt-6 grid grid-cols-3 gap-4'>
            {STATS.map((s, idx) => (
              <div
                key={idx}
                className='p-4 bg-white rounded shadow-soft text-center'
              >
                <div className='text-xl font-bold text-accent'>{s.value}</div>
                <div className='text-sm text-slate-600'>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className='bg-white rounded-lg p-6 shadow-soft'>
          <ol className='space-y-4'>
            <li className='flex items-start gap-3'>
              <div className='w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold'>
                1
              </div>
              <div>
                <div className='font-semibold text-xl'>Choose your event</div>
                <div className='text-sm text-slate-600'>
                  Pick the event & package that suits you.
                </div>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <div className='w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold'>
                2
              </div>
              <div>
                <div className='font-semibold text-xl'>
                  We arrange your travel & tickets
                </div>
                <div className='text-sm text-slate-600'>
                  From flights to transfers — we handle it.
                </div>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <div className='w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold'>
                3
              </div>
              <div>
                <div className='font-semibold text-xl'>Enjoy the event</div>
                <div className='text-sm text-slate-600'>
                  Sit back — we’ll take care of logistics.
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}
