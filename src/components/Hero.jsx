import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useInView } from 'react-intersection-observer'

function Hero() {
  // Track mouse position for background effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  // Check if section is visible in viewport
  const { ref, inView } = useInView({ 
    threshold: 0.1,
    rootMargin: "50px"
  })
  
  // Stats shown in the hero section
  const stats = [
    { number: '3', label: 'Projects', icon: '🎯' },
    { number: '2', label: 'Completed Project', icon: '⭐' },
    { number: '1', label: 'Years of Experience', icon: '⚡' },
  ]

  // Handle mouse movement for background effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }

    // Make mouse tracking smoother
    let ticking = false
    const throttledMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleMouseMove(e)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('mousemove', throttledMouseMove)
    return () => window.removeEventListener('mousemove', throttledMouseMove)
  }, [])

  // Create floating particles in background
  const floatingElements = useMemo(() => 
    [...Array(12)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    })), []
  )

  return (
    <section 
      ref={ref}
      id="hero" 
      className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#0A0A0A] py-16 sm:py-20"
    >
      {/* Green gradient background that follows mouse */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#204a4e]/30 to-transparent" />
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(69, 166, 190, 0.3) 0%, transparent 60%)`,
            willChange: 'transform'
          }}
        />
      </div>

      {/* Floating particles in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map(({ id, left, top, duration, delay }) => (
          <motion.div
            key={id}
            className="absolute w-2 h-2 bg-[#45b0be]/20 rounded-full"
            style={{ left, top }}
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-20">
          
          {/* Left side - Text content */}
          <motion.div 
            className="flex-1 order-2 text-center lg:text-left lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ 
              duration: 0.5,
              type: "spring",
              stiffness: 50,
              damping: 10
            }}
          >
            {/* Name and role */}
            <div className="mb-8 text-white">
              <motion.h1
                className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 50
                }}
              >
                Afzal Khairahmansyach
              </motion.h1>

              {/* Typing animation for roles */}
              {inView && (
                <div className="h-[40px] sm:h-[48px]">
                  <TypeAnimation
                    sequence={[
                      'Web Developer',
                      2000,
                      'Back End Developer',
                      2000,
                      'Problem Solver',
                      2000,
                      'Data Engineer',
                      2000,
                    ]}
                    wrapper="h2"
                    className="text-2xl sm:text-3xl lg:text-4xl font-semibold 
                      bg-gradient-to-r from-[#45b0be] to-[#45b0be] bg-clip-text text-transparent
                      font-sans tracking-tight"
                    repeat={Infinity}
                    speed={50}
                    cursor={true}
                    cursorStyle="|"
                    cursorBlinkSpeed={800}
                    style={{
                      display: 'inline-block',
                      fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
                    }}
                  />
                </div>
              )}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8 sm:grid-cols-3 sm:gap-8">
              {stats.map(({ number, label, icon }, index) => (
                <motion.div
                  key={label}
                  className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl 
                    hover:bg-white/10 border border-white/10 hover:border-[#45b0be]/50
                    transform-gpu"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 50
                  }}
                >
                  <span className="block mb-3 text-2xl sm:text-3xl">{icon}</span>
                  <motion.div 
                    className="text-2xl sm:text-3xl font-bold text-[#45b0be] mb-1"
                    initial={{ number: 0 }}
                    animate={inView ? { number: parseInt(number) } : { number: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    {number}
                  </motion.div>
                  <div className="text-sm sm:text-base text-white/70">{label}</div>
                </motion.div>
              ))}
            </div>

            {/* Contact button */}
            <a
            href='https://drive.google.com/file/d/1ejeLMr_KsRP4TiGBfGMzFUnVyF6zmvGw/view?usp=sharing'
            >
            <motion.button
              className="group relative bg-[#45b0be] text-white font-bold py-3 sm:py-4 px-8 sm:px-10 
                rounded-full overflow-hidden w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">See&apos;s My CV</span>
              <motion.div
                className="absolute inset-0 bg-[#204a4e]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            </a>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div
            className="order-1 mb-8 lg:w-1/3 lg:order-2 lg:mb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: 0.5,
              type: "spring",
              stiffness: 50
            }}
          >
            <div className="relative">
              {/* Profile image with glowing effect */}
              <motion.div
                className="relative w-48 h-48 mx-auto overflow-hidden rounded-full sm:w-64 sm:h-64 lg:w-96 lg:h-96"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(69, 166, 190, 0.3)',
                    '0 0 60px rgba(69, 166, 190, 0.3)',
                    '0 0 20px rgba(69, 166, 190, 0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <img
                  src="/fto.JPG"
                  alt="Afzal Khairahmansyach"
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </motion.div>

              {/* Floating achievement badge */}
              <motion.div
                className="absolute p-3 border rounded-full sm:p-4 -right-2 sm:-right-4 top-10 bg-white/10 backdrop-blur-md border-white/20"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <span className="text-xl sm:text-2xl">🏆</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 