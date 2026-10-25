import { useState } from 'react'

export default function Stepik() {
  const [isHovered, setIsHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => setClicked(false), 600)
    setTimeout(() => {
      window.open('https://wa.me/77757447120', '_blank')
    }, 300)
  }

  return (
    <div 
      className={`stepik-wrapper ${clicked ? 'clicked' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className={`stepik-bubble ${isHovered || clicked ? 'show' : ''}`}>
        {clicked ? 'Ура! Открываю WhatsApp... 🚀' : 'Привет! Я Степик 👋\nДавай запишемся на занятие?'}
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