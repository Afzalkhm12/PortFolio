import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import useAnimateOnScroll, { fadeInUpVariants, staggerChildrenVariants, scaleInVariants } from '../hooks/useAnimateOnScroll'

const PRIMARY_GREEN = '#45b0be'

function About() {
  // Track scroll position for background movement
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Setup animation controls for different sections
  const { ref: contentRef, controls: contentControls } = useAnimateOnScroll()
  const { ref: timelineRef, controls: timelineControls } = useAnimateOnScroll(0.15)
  const { ref: valuesRef, controls: valuesControls } = useAnimateOnScroll(0.1)

  // Move background based on scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  // Skills and achievements shown in highlights
  const highlights = [
    { text: 'Developer', icon: '💻' },
    { text: 'Data  Engineer', icon: '📚' },
    { text: 'Problem Solver', icon: '🚀' }
  ]

  // Statistics display
  const stats = [
    { number: '3', label: 'Projects', icon: '🎯' },
    { number: '2', label: 'Completed Project', icon: '⭐' },
    { number: '1', label: 'Years of Experience', icon: '⚡' },
  ]

  // Career timeline data
  const timeline = [
    {
      year: '2022',
      title: 'Started Coding, Students at Universitas Nasional',
      description: 'Began learning Fullstack Developer Path through self-study and bootcamps',
      icon: '🌱'
    },
    {
      year: '2023',
      title: 'First project as Fullstack Developer',
      description: 'Final Project From E-Business Course University, Make Online Shop Website named Shoessland With HTML, JavaScript, Tailwind',
      icon: '👨‍💻'
    },
    {
      year: '2024',
      title: 'Fullstack Developer (UNAS FEST)',
      description: 'Join Universitas Nasional Festival as Fullstack Developer. Developed Caturnawa website using Laravel,integrated with Supabase for database and Midtrans as the payment gateway. The website serves as a platform providing information about competitions, facilitating registrations and payments, managing competition assessments, and displaying leaderboards for each event. Hosted and maintained the website, ensuring optimal performance and reliability. ',
      icon: '🎯'
    },
    {
      year: '2024',
      title: 'Back-End Developer (Anambas Tourism Website)',
      description: `Request From Universitas Nasional make Tourist website for Anambas Island in region of Riau, and i'am Designed and implemented RESTful APIs using Laravel and MySQL for seamless data management and integration. `,
      icon: '🚀'
    }
  ]

  // Core values and principles
  const values = [
    {
      icon: '🎯',
      title: 'Innovation',
      description: 'Pushing boundaries with creative solutions',
      color: 'linear-gradient(135deg,rgb(69, 176, 190) 0%,rgb(32, 65, 78) 100%)'
    },
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'Committed to delivering premium quality',
      color: 'linear-gradient(135deg, rgb(32, 65, 78) 0%, rgb(69, 176, 190) 100%)'
    },
    {
      icon: '🚀',
      title: 'Growth',
      description: 'Continuous learning and improvement',
      color: 'linear-gradient(135deg, rgb(69, 176, 190) 0%, rgb(32, 65, 78) 100%)'
    },
    {
      icon: '⚡',
      title: 'Efficiency',
      description: 'Building trust through reliable delivery',
      color: 'linear-gradient(135deg, rgb(32, 65, 78) 0%, rgb(69, 176, 190) 100%)'
    }
  ]

  const videoRef = useRef(null)
  const [progress, setProgress] = useState(0)

  // Update video progress
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      const progress = (video.currentTime / video.duration) * 100
      setProgress(progress)
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    return () => video.removeEventListener('timeupdate', handleTimeUpdate)
  }, [])

  return (
    <motion.section 
      ref={containerRef}
      id="about" 
      className="relative min-h-screen py-20 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Moving background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ 
          backgroundImage: 'radial-gradient(circle at center, #45b0be 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          y: backgroundY 
        }}
      />

      <div className="relative px-2 mx-auto max-w-7xl sm:px-4 lg:px-6">
        {/* Two column layout */}
        <motion.div 
          ref={contentRef}
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={contentControls}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16"
          key={contentControls ? "visible" : "hidden"}
        >
          {/* Left column - About me and highlights */}
          <motion.div 
            className="space-y-12" 
            variants={fadeInUpVariants}
            key={contentControls ? "visible" : "hidden"}
          >
            {/* About section header and video */}
            <div>
              <motion.div className="flex flex-col gap-6 mb-8">
                <motion.h2 
                  className="text-5xl font-bold text-white"
                  variants={fadeInUpVariants}
                >
                  About <span className="text-[#45b0be]">Me</span>
                </motion.h2>
                
                {/* Story description */}
                <motion.p 
                  className="text-lg text-white/80 max-w-2xl"
                  variants={fadeInUpVariants}
                >
                  Bachelor of Information System from Nasional University I am an IT enthusiast with experience as a Fullstack Web 
Developer, specializing in PHP Laravel and the MERN stack. With my skills and interests, I am confident in my ability to 
contribute effectively and professionally to any organization. 
                </motion.p>
              </motion.div>

              {/* Video introduction */}
              <motion.div 
                className="relative overflow-hidden cursor-pointer aspect-video rounded-xl group"
                variants={scaleInVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
                key={contentControls ? "visible" : "hidden"}
              >
                {/* Gradient overlay */}
                <motion.div 
                  className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 0.4 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Video element */}
                <motion.img
                src="/ac.png" // Path ke gambar
                alt="Thumbnail"
                className="object-cover w-full h-full transform-gpu"
                loading="lazy"
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.5,
                    ease: [0.33, 1, 0.68, 1],
                  },
                }}
              />

                

                {/* Video Controls */}
                <div className="absolute bottom-4 left-0 right-0 z-30 px-4 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="flex items-center justify-between">
                    
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Skills and expertise */}
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={staggerChildrenVariants}
              key={contentControls ? "visible" : "hidden"}
            >
              {highlights.map(({ text, icon }) => (
                <motion.div
                  key={`${text}-${contentControls ? "visible" : "hidden"}`}
                  className="group"
                  variants={fadeInUpVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full
                                hover:bg-[#45b0be]/20 transition-all duration-300">
                    <span className="text-2xl">{icon}</span>
                    <span className="text-white/90 group-hover:text-white">{text}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Career timeline */}
          <motion.div 
            ref={timelineRef}
            variants={staggerChildrenVariants}
            initial="hidden"
            animate={timelineControls}
            className="space-y-12"
            key={timelineControls ? "visible" : "hidden"}
          >
            <h3 className="mb-8 text-3xl font-bold text-white">My Journey</h3>
            <div className="relative ml-6 md:ml-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={`${item.year}-${timelineControls ? "visible" : "hidden"}`}
                  className="relative pb-12 pl-8 border-l-2 border-[#45b0be]/30 last:pb-0"
                  variants={fadeInUpVariants}
                  custom={index}
                >
                  <div 
                    className="absolute left-0 p-3 -translate-x-1/2 bg-[#1A1A1A] rounded-full 
                      border-2 border-[#45b0be] transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <motion.div 
                    className="p-4 transition-all duration-300 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10"
                    whileHover={{ 
                      x: 10,
                      transition: { type: "spring", stiffness: 200 }
                    }}
                  >
                    <span className="text-[#45b0be] font-mono text-sm">
                      {item.year}
                    </span>
                    <h4 className="mt-2 mb-2 text-lg font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-white/70">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Core values section */}
        <motion.div 
          ref={valuesRef}
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={valuesControls}
          className="px-4 mt-20"
          key={`values-${valuesControls ? "visible" : "hidden"}`}
        >
          <motion.h3 
            className="mb-12 text-4xl font-bold text-center text-white"
            variants={fadeInUpVariants}
          >
            Core <span className="text-[#45b0be]">Values</span>
          </motion.h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={`${value.title}-${valuesControls ? "visible" : "hidden"}`}
                className="relative p-6 overflow-hidden border sm:p-8 group rounded-2xl bg-white/5 backdrop-blur-sm border-white/10 transform-gpu"
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
                whileHover={{ 
                  scale: 1.02,
                  transition: { 
                    duration: 0.2,
                    ease: "easeOut"
                  }
                }}
              >
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 opacity-0 rounded-2xl group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0" 
                    style={{
                      background: `linear-gradient(90deg, transparent, ${value.color.split(' ')[4]}, transparent)`,
                      animation: 'shimmer 2s linear infinite',
                    }}
                  />
                </motion.div>

                {/* Content Container */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <motion.div 
                    className="flex items-center justify-center w-12 h-12 mb-4 text-3xl rounded-full 
                      sm:w-16 sm:h-16 sm:mb-6 sm:text-4xl bg-white/5 group-hover:bg-[#45b0be]/10 
                      transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      transition: { 
                        type: "spring",
                        stiffness: 200,
                        damping: 10
                      }
                    }}
                  >
                    <span className="transition-transform duration-300 transform-gpu group-hover:scale-110">
                      {value.icon}
                    </span>
                  </motion.div>

                  {/* Text Content */}
                  <motion.div
                    initial={{ y: 0 }}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="mb-2 text-xl font-bold text-white sm:mb-3 sm:text-2xl 
                      group-hover:text-[#45b0be] transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-sm leading-relaxed transition-colors duration-300 sm:text-base text-white/70 group-hover:text-white/90">
                      {value.description}
                    </p>
                  </motion.div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 transition-opacity duration-300 opacity-0 -z-10 group-hover:opacity-100 blur-2xl"
                  style={{
                    background: value.color,
                    opacity: 0.1
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Add this to your global CSS */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </motion.section>
  )
}

export default About 