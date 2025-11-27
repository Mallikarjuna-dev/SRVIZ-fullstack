const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const leads = []

app.post('/leads', (req, res) => {
  const { name, email, phone, message } = req.body
  if (!name || !email || !phone)
    return res.status(400).json({ error: 'missing fields' })
  const entry = {
    id: leads.length + 1,
    name,
    email,
    phone,
    message,
    receivedAt: new Date(),
  }
  leads.push(entry)
  console.log('New lead received:', entry)
  res.json({ ok: true })
})

app.get('/leads', (req, res) => {
  res.json(leads)
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log('Server listening on port:', PORT))
