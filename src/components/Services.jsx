import { useState } from 'react'
import { motion } from 'framer-motion'
import useAnimateOnScroll, { fadeInUpVariants, staggerChildrenVariants, scaleInVariants } from '../hooks/useAnimateOnScroll'

function Services() {
  // Track which service card is being hovered
  const [hoveredIndex, setHoveredIndex] = useState(null)

  // Set up scroll animations for the whole section and the grid
  const { ref: sectionRef, controls: sectionControls, inView: sectionInView } = useAnimateOnScroll(0.1)
  const { ref: gridRef, controls: gridControls, inView: gridInView } = useAnimateOnScroll(0.15)

  // List of all services with their details
  const services = [
    {
      title: 'Web Development',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      description: 'Custom, responsive websites built with modern technologies. From simple landing pages to complex web applications.',
      gradient: 'from-[#45b0be] to-[#204a4e]'
    },
    {
      title: 'SEO Optimization',
      icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
      description: 'Improve your search engine rankings and drive organic traffic to your website.',
      gradient: 'from-[#45b0be] to-[#204a4e]'
    },
    {
      title: 'RESTful APIs',
      icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z',
      description: 'Designed and implemented RESTful APIs for seamless data management and integration',
      gradient: 'from-[#204a4e] to-[#45b0be]'
    },
  ]

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative py-24 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#1A1A1A] overflow-hidden"
    >
      {/* Moving dots background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={sectionInView ? { opacity: 0.1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        key={`bg-${sectionInView}`}
      >
        {/* Dots pattern that moves across the screen */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, #45b0be 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </motion.div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title and subtitle that fade in when scrolled into view */}
        <motion.div 
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          className="mb-20 text-center"
          key={`header-${sectionInView}`}
        >
          <motion.h2 
            variants={fadeInUpVariants}
            className="mb-6 text-5xl font-bold text-white lg:text-6xl"
          >
            My <span className="text-[#45b0be]">Skills</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUpVariants}
            className="max-w-3xl mx-auto text-xl text-white/70"
          >
            Transforming ideas into digital reality with my comprehensive suite of skills.
          </motion.p>
        </motion.div>

        {/* Grid of service cards */}
        <motion.div 
          ref={gridRef}
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          key={`grid-${gridInView}`}
        >
          {/* Map through each service to create cards */}
          {services.map((service, index) => (
            <motion.div
              key={`${service.title}-${gridInView}`}
              className="relative group"
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 50,
                  scale: 0.9 
                },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }
                }
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Each service card */}
              <motion.div 
                className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm
                  border border-white/10 overflow-hidden transition-all duration-300
                  group-hover:border-[#45b0be]/50"
                whileHover={{ 
                  y: -8,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }
                }}
              >
                {/* Green gradient that shows on hover */}
                <motion.div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300
                    bg-gradient-to-br ${service.gradient}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ 
                    scale: 1,
                    opacity: 0.05,
                    transition: { duration: 0.3 }
                  }}
                />

                {/* Service icon that spins on hover */}
                <motion.div 
                  className="relative w-16 h-16 mb-8 rounded-xl bg-[#45b0be]/10 
                    flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 15
                    }
                  }}
                >
                  <motion.svg
                    className={`w-8 h-8 transition-colors duration-300
                      ${hoveredIndex === index ? 'text-[#45b0be]' : 'text-white'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    whileHover={{ scale: 1.1 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={service.icon}
                    />
                  </motion.svg>
                </motion.div>

                {/* Service title and description */}
                <motion.h3 
                  className="text-2xl font-bold text-white mb-4 group-hover:text-[#45b0be] transition-colors"
                  variants={fadeInUpVariants}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="mb-8 leading-relaxed text-white/70"
                  variants={fadeInUpVariants}
                >
                  {service.description}
                </motion.p>

                {/* Learn More button with arrow */}
                <a
                href="https://wa.me/6288295125848"
                >
                <motion.button
                  className="flex items-center gap-2 text-[#45b0be] font-medium
                    group/btn relative overflow-hidden"
                  whileHover={{ 
                    x: 5,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 10
                    }
                  }}
                >
                  <span>Contact Me </span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ 
                      x: 5,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </motion.button>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services 