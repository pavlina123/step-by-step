import { useState } from 'react'

export default function Stepik() {
  const [isHovered, setIsHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    // Просто анимация клика, БЕЗ перехода в WhatsApp
    setClicked(true)
    setTimeout(() => setClicked(false), 600)
  }

  return (
    <div 
      className={`stepik-wrapper ${clicked ? 'clicked' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className={`stepik-bubble ${isHovered || clicked ? 'show' : ''}`}>
        {clicked 
          ? 'Хи-хи, щекотно! 😄' 
          : 'Привет! Я Степик 👋\nРад видеть тебя здесь!'}
      </div>
      
      <div className="stepik-body">
        <div className="stepik-shadow"></div>
        <img 
          src="https://i.ibb.co.com/zT4YvZcN/Whats-App-Image-2026-10-20-at-19-31-55.png" 
          alt="Степик" 
          className="stepik-real-img" 
        />
      </div>
    </div>
  )
}