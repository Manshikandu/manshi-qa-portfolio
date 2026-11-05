import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

let connectionPromise
async function connectDB() {
  if (mongoose.connection.readyState === 1) return
  if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI is not configured')
  if (!connectionPromise) {
    connectionPromise = mongoose.connect(process.env.MONGODB_URI)
  }
  await connectionPromise
}

const MessageSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 80 },
  email: { type: String, required: true, trim: true, maxlength: 160 },
  message: { type: String, required: true, trim: true, maxlength: 2000 },
  createdAt: { type: Date, default: Date.now }
})
const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema)

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body || {}
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ error: 'Please complete all fields.' })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' })
    }
    await connectDB()
    await Message.create({ name, email, message })
    return res.status(201).json({ success: true, message: 'Thanks! Your message has been received.' })
  } catch (error) {
    console.error('Contact form error:', error.message)
    return res.status(500).json({ error: 'Message could not be sent. Please email me directly.' })
  }
})

export default app