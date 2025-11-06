import { useState } from 'react'
import { motion } from 'framer-motion'
import './ContactForm.css'

const ContactForm = ({ isInView }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '',
  })

  const [submitStatus, setSubmitStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check honeypot field
    if (formData.website) {
      console.log('Bot detected')
      return
    }

    setIsSubmitting(true)

    try {
      // Send to FormSubmit
      const response = await fetch('https://formsubmit.co/lucille@lucilleablett.co.uk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          message: '',
          website: '',
        })

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="contact-form-container"
    >
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="contact-form-title">SEND A MESSAGE</h2>

        <div className="form-group">
          <label htmlFor="name">YOUR NAME</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">YOUR EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">MESSAGE</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Honeypot field - multiple hiding techniques to defeat bot detection */}
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex="-1"
          autoComplete="off"
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '-9999px',
            width: '1px',
            height: '1px',
            opacity: '0',
            pointerEvents: 'none',
            visibility: 'hidden',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
          }}
        />

        <button
          type="submit"
          className="submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
        </button>

        <p className="form-note">
          Your email is protected • Bot prevention enabled
        </p>

        {submitStatus === 'success' && (
          <div className="status-message success">
            ✓ Message sent! I'll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="status-message error">
            ✗ Error sending message. Please try again.
          </div>
        )}
      </form>
    </motion.div>
  )
}

export default ContactForm
