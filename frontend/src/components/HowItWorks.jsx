import React from 'react'

const STEPS = [
  { title: 'Choose Event', text: 'Pick from curated global events.' },
  { title: 'Customize', text: 'Hotels, seats, transfers & add-ons.' },
  { title: 'Travel', text: 'We manage everything end-to-end.' },
]

export default function HowItWorks() {
  return (
    <section id='how' className='py-10'>
      <h2 className='text-2xl font-bold'>How it works</h2>
      <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
        {STEPS.map((s, idx) => (
          <div
            key={idx}
            className='p-6 bg-white rounded shadow-soft text-center'
          >
            <div className='text-3xl font-bold text-slate-300'>0{idx + 1}</div>
            <h3 className='mt-4 font-semibold'>{s.title}</h3>
            <p className='mt-2 text-sm text-slate-600'>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
