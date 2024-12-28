import { useState } from 'react'

function Footer() {
  // List of links for quick navigation
  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Myskills', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ]

  // Social media links and icons
  const socials = [
    { 
      name: 'GitHub',
      url: 'https://github.com/Afzalkhm12',
      icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' // SVG path for GitHub icon
    },
    { 
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/afzal-khairahmansyach-1a0459248/',
      icon: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' // SVG path for LinkedIn icon
    },
    // ... other social media icons
  ]

  // Smooth scroll to different sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#0A0A0A] text-white py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Main footer content grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand info and description */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tight text-[#45b0be]">
              AzDev
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Crafting digital experiences with passion and precision. 
              Let's build something amazing together.
            </p>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-[#45b0be] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-3 text-white/70">
              <li className="hover:text-[#45b0be] transition-colors">
                <a href="mailto:afzalkhm1203@gmail.com">📩 afzalkhm1203@gmail.com</a>
              </li>
              <li className="hover:text-[#45b0be] transition-colors">
                <a href="https://api.whatsapp.com/send?phone=6288295125848">🙋‍♂️ +62 882 9512 5848</a>
              </li>
              <li>🎈Bekasi, Jawabarat</li>
            </ul>
          </div>

          {/* Social media icons */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Follow Me</h3>
            <div className="flex gap-5">
              {socials.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-white/70 hover:text-[#45b0be] transition-colors"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright text */}
        <div className="pt-8 mt-12 text-sm text-center border-t border-white/10 text-white/50">
          © {new Date().getFullYear()} AzDev. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer 