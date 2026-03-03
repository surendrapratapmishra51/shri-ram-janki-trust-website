import React from 'react'

const Button = ({ 
  title = "Button", 
  bgColor = "#FC791A", 
  textColor = "#FFFFFF",
  onClick,
  className = "",
  disabled = false,
  type = "button"
}) => {
  
  const buttonStyle = {
    backgroundColor: bgColor,
    color: textColor
  }
  
  const baseClasses = "px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:scale-105 hover:shadow-lg"
  
  const buttonClasses = `${baseClasses} ${disabledClasses} ${className}`
  
  return (
    <button
      type={type}
      className={buttonClasses}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  )
}

export default Button