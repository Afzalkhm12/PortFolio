import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Contact() {
  // Store form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  // Track if form is being submitted
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Check if section is visible on screen
  const { ref, inView } = useInView({
    threshold: 0.1
  })

  // Contact details with icons and links
  const contactInfo = [
    {
      icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
      title: "WhatsApp",
      content: "🙋‍♂️ +62 882 9512 5848",
      href: "https://api.whatsapp.com/send?phone=6288295125848"
    },
    {
      icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
      title: "Email",
      content: "📩 afzalkhm1203@gmail.com",
      href: "mailto:afzalkhm1203@gmail.com"
    },
    {
      icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
      title: "Address",
      content: "🎈Bekasi, Jawabarat",
      href: "https://maps.google.com"
    }
  ]

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Fake API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section 
      ref={ref}
      id="contact" 
      className="relative py-32 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#1A1A1A] overflow-hidden"
    >
      {/* Moving dots in background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        key={`bg-${inView}`}
      >
        {/* Animated dot pattern */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, #45b0be 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
          animate={inView ? {
            backgroundPosition: ['0% 0%', '100% 100%']
          } : {}}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity
          }}
        />
      </motion.div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, type: "spring" }}
          key={`header-${inView}`}
        >
          <h2 className="mb-4 text-5xl font-bold text-center text-white lg:text-6xl">
            Let&apos;s <span className="text-[#45b0be]">Connect</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-center text-white/70">
            Have a project in mind? We&apos;d love to hear from you! Drop us a message 
            and we&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Contact form with inputs */}
          <motion.div 
            className="p-6 overflow-hidden border sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border-white/10"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            key={`form-${inView}`}
          >
            {/* Form fields */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name and email inputs */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-[#45b0be] 
                      focus:ring-2 focus:ring-[#45b0be]/20 outline-none transition-colors placeholder:text-white/30 text-white"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-[#45b0be] 
                      focus:ring-2 focus:ring-[#45b0be]/20 outline-none transition-colors placeholder:text-white/30 text-white"
                  />
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-[#45b0be] 
                    focus:ring-2 focus:ring-[#45b0be]/20 outline-none transition-colors placeholder:text-white/30 text-white"
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-[#45b0be] 
                    focus:ring-2 focus:ring-[#45b0be]/20 outline-none transition-colors placeholder:text-white/30 text-white resize-none"
                />
              </div>
              
              {/* Submit button with loading state */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 bg-[#45b0be] text-white font-bold rounded-lg
                  transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70
                  disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {/* Button hover effect */}
                <div className="absolute inset-0 transition-transform duration-700 transform translate-x-full -skew-x-12 bg-white/20 group-hover:translate-x-0" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact info and map */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
            key={`info-${inView}`}
          >
            {/* Contact details with icons */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={`${info.title}-${inView}`}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/5 
                    backdrop-blur-sm hover:border-[#45b0be]/50 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <div className="p-3 rounded-full bg-[#45b0be]/20 group-hover:bg-[#45b0be]/30 transition-colors">
                    <svg className="w-6 h-6 text-[#45b0be]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={info.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-[#45b0be] transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-white/70">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Google Maps embed */}
            <motion.div 
              className="mt-8 overflow-hidden border rounded-xl border-white/10 bg-white/5 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
              key={`map-${inView}`}
            >
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.870183748045!2d106.83684327585402!3d-6.280791893708074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f211176e9827%3A0xb4bc144c3140a2d9!2sUniversitas%20Nasional!5e0!3m2!1sid!2sid!4v1735309243336!5m2!1sid!2sid"
                className="w-full h-[350px] border-0 opacity-90"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 