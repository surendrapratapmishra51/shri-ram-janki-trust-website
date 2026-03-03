import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faYoutube,
  faLinkedin,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope,
  faChevronRight 
} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { name: 'Facebook', icon: faFacebook, url: 'https://facebook.com', color: 'hover:bg-[#1877F2]' },
    { name: 'Twitter', icon: faTwitter, url: 'https://twitter.com', color: 'hover:bg-[#1DA1F2]' },
    { name: 'Instagram', icon: faInstagram, url: 'https://instagram.com', color: 'hover:bg-[#E4405F]' },
    { name: 'YouTube', icon: faYoutube, url: 'https://youtube.com', color: 'hover:bg-[#FF0000]' }
  ]

  const supportLinks = ['Home', 'About Us', 'Services', 'Contact Us']
  const usefulLinks = ['Privacy Policy', 'Terms of Service', 'FAQ']

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1 - About */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-yellow-400">
              Shri Ram Janki Trust
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              We are dedicated to empowering lives through compassion, care, and community support. 
              Our mission is to create an inclusive and hopeful future for those who need it most.
            </p>
            
            {/* Social Media Icons - Font Awesome */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:text-white transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-sm" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2 - Support Links */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-yellow-400">
              Support Links
            </h3>
            <ul className="space-y-2">
              {supportLinks.map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="text-sm sm:text-base text-gray-300 hover:text-yellow-400 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <FontAwesomeIcon 
                      icon={faChevronRight} 
                      className="text-xs text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" 
                    />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Useful Links */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-yellow-400">
              Useful Links
            </h3>
            <ul className="space-y-2">
              {usefulLinks.map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="text-sm sm:text-base text-gray-300 hover:text-yellow-400 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <FontAwesomeIcon 
                      icon={faChevronRight} 
                      className="text-xs text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" 
                    />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 - Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-yellow-400">
              Get In Touch
            </h3>
            <div className="space-y-3 text-sm sm:text-base text-gray-300">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-400 text-lg mt-1" />
                <span>Karanpur, Babhnan – Gonda, Uttar Pradesh</span>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="text-yellow-400 text-lg" />
                <a href="tel:+919918953452" className="hover:text-yellow-400 transition-colors">
                  +91 9918953452
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400 text-lg" />
                <a href="mailto:help@shriramjankitrust.com" className="hover:text-yellow-400 transition-colors break-all">
                  help@shriramjankitrust.com
                </a>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 my-8 lg:my-10"></div>
        
        {/* Copyright */}
        <div className="text-center text-sm sm:text-base text-gray-400">
          <p>&copy; {currentYear} Shri Ram Janki Trust. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer