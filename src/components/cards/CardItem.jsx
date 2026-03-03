import React from 'react'
import Button from '../common/Button'

const CardItem = ({ icon, title, description, buttonTitle, bgColor = '#FC791A' }) => {
  return (
    <div className={`w-full max-w-sm mx-auto rounded-2xl p-6 sm:p-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`} style={{ backgroundColor: bgColor }}>
      
      {/* Icon Container */}
      <div className='relative mb-6'>
        <div className='absolute inset-0 bg-white/20 rounded-full blur-md'></div>
        <div className='relative bg-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center'>
          <img 
            src={icon} 
            alt={title} 
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className='text-center space-y-3 sm:space-y-4'>
        <h2 className='text-white font-bold text-xl sm:text-2xl md:text-3xl'>
          {title}
        </h2>
        
        <p className='text-white/80 text-sm sm:text-base md:text-lg pb-8 leading-relaxed'>
          {description}
        </p>
      </div>
      
      {/* Button */}
     <Button 
        title={buttonTitle || "Learn More"}
        bgColor="#FFFFFF"
        textColor={bgColor}
        className="w-full"
      />
    
    </div>
  )
}

export default CardItem