import React, { useState } from 'react'

const Q = [
  {
    q: 'What is included in the package?',
    a: 'Packages include race/ticket, hotel and basic transfers — add-ons are optional.',
  },
  {
    q: 'Can you arrange flights?',
    a: 'Yes — flights can be added to any package on request.',
  },
  {
    q: 'Do you offer group discounts?',
    a: 'Yes — contact us for group pricing and custom offers.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className='py-10'>
      <h3 className='text-2xl font-bold'>FAQ</h3>
      <div className='mt-4 space-y-3 max-w-3xl'>
        {Q.map((item, i) => (
          <div key={i} className='bg-white rounded shadow-soft overflow-hidden'>
            <button
              className='w-full text-left p-4 flex justify-between items-center'
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className='font-semibold'>{item.q}</span>
              <span className='text-slate-500'>{open === i ? '−' : '+'}</span>
            </button>
            {open === i && (
              <div className='p-4 pt-0 text-slate-600 border-t'>{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
