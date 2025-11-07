import { useState } from 'react'
import { motion } from 'framer-motion'
import { formLabels, formPlaceholders, formButtons, formStatus, formNote, consoleMessages } from '@constants/messages'
import { formMessageTimeout } from '@constants/timing'
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
      console.log(consoleMessages.botDetected)
      return
    }

    setIsSubmitting(true)
    const submitUrl = import.meta.env.VITE_FORM_SUBMIT_URL

    try {
      console.log('Sending form to:', submitUrl)
      const response = await fetch(submitUrl, {
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

      console.log('Response status:', response.status)
      console.log('Response headers:', response.headers)

      if (response.ok || response.status === 200) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          message: '',
          website: '',
        })

        // Reset success message after timeout
        setTimeout(() => setSubmitStatus(null), formMessageTimeout)
      } else {
        throw new Error(`Form submission failed with status ${response.status}`)
      }
    } catch (error) {
      console.error(consoleMessages.formError, error)
      console.error('Full error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), formMessageTimeout)
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
          <label htmlFor="name">{formLabels.name}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={formPlaceholders.name}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">{formLabels.email}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={formPlaceholders.email}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">{formLabels.message}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={formPlaceholders.message}
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
          {isSubmitting ? formButtons.sending : formButtons.send}
        </button>

        <p className="form-note">
          {formNote}
        </p>

        {submitStatus === 'success' && (
          <div className="status-message success">
            ✓ {formStatus.success}
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="status-message error">
            ✗ {formStatus.error}
          </div>
        )}
      </form>
    </motion.div>
  )
}

export default ContactForm
