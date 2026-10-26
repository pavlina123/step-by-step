import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function useScrollReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return ref
}

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="hero-content fade-in-up">
        <div className="badge">Центр психолого-логопедической коррекции</div>
        <h1>Вместе к <span className="gradient-text">большим</span> возможностям</h1>
        <p>Психологическая, логопедическая и коррекционная помощь детям, подросткам и взрослым в Астане.</p>
        
        <div className="hero-actions">
          <a href="https://wa.me/77757447120" className="btn-primary" target="_blank" rel="noreferrer">
            Записаться на консультацию
          </a>
          <a href="#services" className="btn-secondary">Узнать о занятиях</a>
        </div>
        
        <div className="hero-stats">
          <div><strong>20+</strong> лет опыта</div>
          <div><strong>15</strong> кабинетов</div>
          <div><strong>400</strong> кв.м. детского счастья</div>
          <div><strong>20+</strong> специалистов</div>
        </div>
      </div>

      <div className="hero-image fade-in-up delay-2">
        <div className="image-frame">
          {/* ТУТ НОВОЕ ФОТО РЕБЕНКА */}
          <img 
            src="https://i.ibb.co.com/LDKyKKRN/Whats-App-Image-2026-10-26-at-14-39-55.jpg" 
            alt="Счастливый ребенок" 
            className="hero-real-img" 
          />
          
          <div className="floating-badge badge-1">💖 Каждый ребенок может больше</div>
          <div className="floating-badge badge-2">✨ Поддержка • Развитие • Успех</div>
        </div>
      </div>
    </section>
  )
}

export function Diagnoses() {
  const ref = useScrollReveal()
  const items = [
    { title: 'РАС', sub: 'Расстройство аутистического спектра', icon: '🧩', color: 'pink' },
    { title: 'ЗПР', sub: 'Задержка психического развития', icon: '💭', color: 'blue' },
    { title: 'ЗРР', sub: 'Задержка речевого развития', icon: '💬', color: 'yellow' },
    { title: 'Алалия', sub: 'Системное недоразвитие речи', icon: '📡', color: 'purple' },
    { title: 'СДВГ', sub: 'Синдром дефицита внимания', icon: '⚙️', color: 'green' },
    { title: 'Другие', sub: 'Особенности развития', icon: '💖', color: 'pink' },
    { title: 'Нормотипичные дети', sub: 'Трудности в учебе, тревожность, страхи, подростковые кризисы, профориентация, самооценка', icon: '🌱', color: 'green' },
    { title: 'Родители и взрослые', sub: 'Психологическая поддержка. Усталость, выгорание, отношения с детьми, личные границы', icon: '🤝', color: 'blue' }
  ]

  return (
    <section id="diagnoses" className="section reveal-section" ref={ref}>
      <div className="section-header">
        <h2 className="section-title">Мы работаем с детьми с:</h2>
        <p className="section-subtitle">Индивидуальный подход к каждому</p>
      </div>
      
      <div className="grid-diagnoses">
        {items.map((item, index) => (
          <div key={index} className={`card-diagnose card-${item.color}`} style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="card-icon-wrapper">
              <span className="icon">{item.icon}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// СЛАЙДЕР НАШ ЦЕНТР
export function Gallery() {
  const ref = useScrollReveal()
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    { id: 1, img: 'https://i.ibb.co.com/7MBS6vn/Whats-App-Image-2026-10-23-at-16-26-00.jpg' },
    { id: 2, img: 'https://i.ibb.co.com/r2Kq6Cpw/Whats-App-Image-2026-10-23-at-16-26-01-1.jpg' },
    { id: 3, img: 'https://i.ibb.co.com/PGcWB5H7/Whats-App-Image-2026-10-23-at-16-26-01.jpg' },
    { id: 4, img: 'https://i.ibb.co.com/WNj2V841/Whats-App-Image-2026-10-23-at-16-26-02.jpg' },
    { id: 5, img: 'https://i.ibb.co.com/qF2TNSKx/Whats-App-Image-2026-10-23-at-16-27-20-3.jpg' },
    { id: 6, img: 'https://i.ibb.co.com/PvtwbZkV/Whats-App-Image-2026-10-23-at-16-27-20-2.jpg' },
    { id: 7, img: 'https://i.ibb.co.com/Q3Ks75Q7/Whats-App-Image-2026-10-23-at-16-27-20-1.jpg' },
    { id: 8, img: 'https://i.ibb.co.com/jKLHDRy/Whats-App-Image-2026-10-23-at-16-27-20.jpg' },
    { id: 9, img: 'https://i.ibb.co.com/MyQ0bVNh/Whats-App-Image-2026-10-23-at-16-29-49-9.jpg' },
    { id: 10, img: 'https://i.ibb.co.com/7xMMWVV8/Whats-App-Image-2026-10-23-at-16-29-50-5.jpg' },
    { id: 11, img: 'https://i.ibb.co.com/pvsKfNwn/Whats-App-Image-2026-10-23-at-16-29-50-4.jpg' },
    { id: 12, img: 'https://i.ibb.co.com/C56LQP2Q/Whats-App-Image-2026-10-23-at-16-29-50-3.jpg' },
    { id: 13, img: 'https://i.ibb.co.com/xSnQhJdv/Whats-App-Image-2026-10-23-at-16-34-27-1.jpg' },
    { id: 14, img: 'https://i.ibb.co.com/vCQbnBHK/Whats-App-Image-2026-10-23-at-16-34-28-5.jpg' },
    { id: 15, img: 'https://i.ibb.co.com/mCHD41hB/Whats-App-Image-2026-10-23-at-16-34-28-4.jpg' },
    { id: 16, img: 'https://i.ibb.co.com/m3VVHBj/Whats-App-Image-2026-10-23-at-16-34-28-3.jpg' },
    { id: 17, img: 'https://i.ibb.co.com/m5yYBKdg/Whats-App-Image-2026-10-23-at-16-37-33-5.jpg' },
    { id: 18, img: 'https://i.ibb.co.com/3mmMmqqR/Whats-App-Image-2026-10-23-at-16-37-33-4.jpg' },
    { id: 19, img: 'https://i.ibb.co.com/gMfJBKyB/Whats-App-Image-2026-10-23-at-16-37-33-3.jpg' },
    { id: 20, img: 'https://i.ibb.co.com/LdXVppMG/Whats-App-Image-2026-10-23-at-16-37-34-5.jpg' },
    { id: 21, img: 'https://i.ibb.co.com/vCp2q5mW/Whats-App-Image-2026-10-23-at-16-37-34-4.jpg' },
    { id: 22, img: 'https://i.ibb.co.com/93wHfPJL/Whats-App-Image-2026-10-23-at-16-37-34-3.jpg' }
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))

  return (
    <section id="gallery" className="section bg-gradient reveal-section" ref={ref}>
      <div className="section-header">
        <h2 className="section-title">Наш центр</h2>
        <p className="section-subtitle">Уютная и безопасная среда для вас и ваших детей</p>
      </div>
      
      <div className="gallery-slider-container">
        <button className="slider-arrow left" onClick={prevSlide}>❮</button>
        
        <div className="gallery-slide">
          <img src={slides[currentSlide].img} alt={`Слайд ${currentSlide + 1}`} />
        </div>

        <button className="slider-arrow right" onClick={nextSlide}>❯</button>
      </div>
      
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentSlide ? 'active' : ''}`} 
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  )
}

export function Specialists() {
  const ref = useScrollReveal()

  const leadership = [
    { id: 10, name: 'Рылова Катерина Анатольевна', role: 'Директор центра, нейропсихолог', exp: 'Стаж 15 лет', img: 'https://i.ibb.co.com/3mHvhDXr/Whats-App-Image-2026-10-22-at-23-32-07.jpg' },
    { id: 11, name: 'Искакова Анара Габдрахмановна', role: 'Логопед-дефектолог, соучредитель', exp: 'Стаж 20 лет', img: 'https://i.ibb.co.com/vxxr8VJB/Whats-App-Image-2026-10-22-at-23-32-07-1.jpg' }
  ]

  const specialists = [
    { id: 15, name: 'Чегодаева Ангелина Викторовна', role: 'Нейропсихолог', exp: 'Стаж 7 лет', img: 'https://i.ibb.co.com/G496y5vd/Whats-App-Image-2026-10-22-at-16-13-55.jpg' },
    { id: 4, name: 'Мухтархан Аяулым Асхатовна', role: 'Методист, нейропсихолог', exp: 'Стаж 4 года', img: 'https://i.ibb.co.com/MyYqKr9G/Whats-App-Image-2026-10-20-at-18-32-51.jpg' },
    { id: 1, name: 'Браун Татьяна Геннадьевна', role: 'Психолог', exp: 'Стаж 16 лет', img: 'https://i.ibb.co.com/v4HN19Gv/Whats-App-Image-2026-10-21-at-17-28-07.jpg' },
    { id: 2, name: 'Нуркенова Фатима Дюсембаевна', role: 'Логопед-дефектолог', exp: 'Стаж 3 года', img: 'https://i.ibb.co.com/Fq7DhdmV/Whats-App-Image-2026-10-21-at-17-29-29.jpg' },
    { id: 13, name: 'Каирова Ажар Аблаевна', role: 'Логопед, дефектолог', exp: 'Стаж 9 лет', img: 'https://i.ibb.co.com/tTLX4DR8/Whats-App-Image-2026-10-21-at-18-03-48.jpg' },
    { id: 16, name: 'Дедейко Владимир Сергеевич', role: 'АФК, ЛФК Тренер', exp: 'Стаж 4 года', img: 'https://i.ibb.co.com/7x2XJmv7/Whats-App-Image-2026-10-22-at-15-57-45.jpg' },
    { id: 3, name: 'Танцюра Снежана Александровна', role: 'Дефектолог', exp: 'Стаж 8 лет', img: 'https://i.ibb.co.com/vtDQmn8/Whats-App-Image-2026-10-21-at-11-31-11.jpg' },
    { id: 9, name: 'Каспакова Руфина Рифкатовна', role: 'Учитель-логопед', exp: 'Стаж 5 лет', img: 'https://i.ibb.co.com/1tDsP8v0/Whats-App-Image-2026-10-21-at-12-41-45.jpg' },
    
    // АЛМАТ ТЕПЕРЬ ПОСЛЕ РУФИНЫ (И СТАЖ 5 ЛЕТ)
    { id: 18, name: 'Смаилов Алмат Сайлаубекович', role: 'Специалист по движению и сценическому искусству', exp: 'Стаж 5 лет', img: 'https://i.ibb.co.com/cSybhH1M/Whats-App-Image-2026-10-25-at-19-49-48.jpg' },

    { id: 8, name: 'Рысбекова Асем Темирболатовна', role: 'Логопед', exp: 'Стаж 10 лет', img: 'https://i.ibb.co.com/whjdFkgJ/Whats-App-Image-2026-10-21-at-13-12-13.jpg' },
    { id: 5, name: 'Газизова Алма Карабаевна', role: 'Психолог, сурдопедагог', exp: 'Стаж 32 года', img: 'https://i.ibb.co.com/nsxQSWVq/Whats-App-Image-2026-10-21-at-17-28-08.jpg' },
    { id: 6, name: 'Каирова Дильназ Жанабайевна', role: 'Логопед', exp: 'Стаж 3 года', img: 'https://i.ibb.co.com/XxSDQfP2/Whats-App-Image-2026-10-21-at-12-58-27.jpg' },
    { id: 12, name: 'Исмаилова Алия Кадржановна', role: 'Логопед', exp: 'Стаж 16 лет', img: 'https://i.ibb.co.com/jv8gRYL8/Whats-App-Image-2026-10-21-at-17-43-27.jpg' },
    { id: 17, name: 'Браун Сабина Владимировна', role: 'АВА терапист', exp: 'Индивидуальные (1 занятие 40 минут)', img: 'https://i.ibb.co.com/WN8xt51X/Whats-App-Image-2026-10-24-at-15-08-08.jpg' },
    { id: 14, name: 'Кабулова Салтанат Абтыхалиевна', role: 'Администратор', exp: 'Стаж 15 лет', img: 'https://i.ibb.co.com/Xr177kMT/Whats-App-Image-2026-10-22-at-12-07-12.jpg' }
  ]

  return (
    <section id="specialists" className="section reveal-section" ref={ref}>
      
      <div className="section-header">
        <h2 className="section-title">Руководство центра</h2>
        <p className="section-subtitle">Основатели и главные специалисты STEP BY STEP</p>
      </div>
      
      <div className="grid-leadership">
        {leadership.map((spec) => (
          <div key={spec.id} className="spec-card leadership-card">
            <div className="spec-photo-wrapper">
              <img src={spec.img} alt={spec.name} className="spec-real-img" />
            </div>
            <div className="spec-info">
              <h3>{spec.name}</h3>
              <p className="spec-role">{spec.role}</p>
              <p className="spec-exp">{spec.exp}</p>
              <Link to={`/specialist/${spec.id}`} className="btn-spec-more">
                Подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="section-header" style={{ marginTop: '40px' }}>
        <h2 className="section-title">Наши специалисты</h2>
        <p className="section-subtitle">Профессионалы, которые любят свое дело</p>
      </div>

      <div className="grid-specialists">
        {specialists.map((spec) => (
          <div key={spec.id} className="spec-card">
            <div className="spec-photo-wrapper">
              <img src={spec.img} alt={spec.name} className="spec-real-img" />
            </div>
            <div className="spec-info">
              <h3>{spec.name}</h3>
              <p className="spec-role">{spec.role}</p>
              {spec.exp && <p className="spec-exp">{spec.exp}</p>}
              <Link to={`/specialist/${spec.id}`} className="btn-spec-more">
                Подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Achievements() {
  const ref = useScrollReveal()
  const items = [
    { id: 1, img: 'https://i.ibb.co.com/Z6Tc0c1N/Whats-App-Image-2026-10-23-at-19-55-07.jpg', wide: false },
    { id: 2, img: 'https://i.ibb.co.com/SwxS4Rzt/Whats-App-Image-2026-10-23-at-19-53-53.jpg', wide: false },
    { id: 3, img: 'https://i.ibb.co.com/Q3x1LJgN/Whats-App-Image-2026-10-23-at-09-12-51-3.jpg', wide: true },
    { id: 4, img: 'https://i.ibb.co.com/jZGst6b2/Whats-App-Image-2026-10-23-at-09-12-51-2.jpg', wide: true }
  ]

  return (
    <section id="achievements" className="section reveal-section" ref={ref}>
      <div className="section-header">
        <h2 className="section-title">Наши достижения</h2>
        <p className="section-subtitle">Документы, лицензии и благодарности центра</p>
      </div>

      <div className="achievements-grid">
        {items.map((item) => (
          <div key={item.id} className={`achievement-card ${item.wide ? 'wide' : ''}`}>
            <img src={item.img} alt="Достижение центра" className="achievement-img" />
          </div>
        ))}
      </div>
    </section>
  )
}

export function Pricing() {
  const ref = useScrollReveal()

  return (
    <section id="pricing" className="section reveal-section" ref={ref}>
      <div className="section-header">
        <h2 className="section-title">Наш прайс</h2>
        <p className="section-subtitle">Прозрачные цены на все услуги центра</p>
      </div>

      <div className="price-grid">
        
        <div className="price-card">
          <div className="price-card-header bg-pink-gradient">
            <h3>Совместная консультация</h3>
          </div>
          <div className="price-list">
            <div className="price-row">
              <div className="price-info">
                <strong>Логопед + Нейропсихолог</strong>
                <span>(руководители)</span>
              </div>
              <div className="price-tag">25.000 тг</div>
            </div>
          </div>
          <div className="price-note">
            <span>💬 Комплексная оценка специалистами</span>
          </div>
        </div>

        <div className="price-card">
          <div className="price-card-header bg-purple-gradient">
            <h3>Стоимость занятий</h3>
          </div>
          <div className="price-list">
            <div className="price-row">
              <div className="price-info">
                <strong>Нейропсихолог</strong>
                <span>(руководитель)</span>
              </div>
              <div className="price-tag">10.000 тг</div>
            </div>
            <div className="price-row">
              <div className="price-info">
                <strong>Логопед</strong>
                <span>(руководитель)</span>
              </div>
              <div className="price-tag">10.000 тг</div>
            </div>
            <div className="price-row">
              <div className="price-info"><strong>Логопед</strong></div>
              <div className="price-tag">8.000 тг</div>
            </div>
            <div className="price-row">
              <div className="price-info"><strong>Психолог</strong></div>
              <div className="price-tag">8.000 тг</div>
            </div>
            <div className="price-row">
              <div className="price-info"><strong>Дефектолог</strong></div>
              <div className="price-tag">8.000 тг</div>
            </div>
            <div className="price-row">
              <div className="price-info"><strong>ЛФК / АФК</strong></div>
              <div className="price-tag">8.000 тг</div>
            </div>
            <div className="price-row">
              <div className="price-info"><strong>Сурдопедагог</strong></div>
              <div className="price-tag">8.000 тг</div>
            </div>
            <div className="price-row">
              <div className="price-info"><strong>АВА-терапия</strong></div>
              <div className="price-tag">9.000 тг</div>
            </div>
          </div>
          <div className="price-note">
            <span>📅 Стоимость 1 занятия (40 минут)</span>
            <small>с учетом приобретения абонемента на месяц</small>
          </div>
        </div>

        <div className="price-card">
          <div className="price-card-header bg-pink-gradient">
            <h3>Стоимость консультаций</h3>
          </div>
          <div className="price-list">
            <div className="price-row">
              <div className="price-info">
                <strong>Нейропсихолог</strong>
                <span>(руководитель)</span>
              </div>
              <div className="price-tag">15.000 тг</div>
            </div>
            <div className="price-row">
              <div className="price-info">
                <strong>Логопед</strong>
                <span>(руководитель)</span>
              </div>
              <div className="price-tag">15.000 тг</div>
            </div>
            <div className="price-row">
              <div className="price-info"><strong>Логопед</strong></div>
              <div className="price-tag">9.000 тг</div>
            </div>
            <div className="price-row">
              <div className="price-info"><strong>Психолог</strong></div>
              <div className="price-tag">9.000 тг</div>
            </div>
            <div className="price-row">
              <div className="price-info"><strong>Дефектолог</strong></div>
              <div className="price-tag">9.000 тг</div>
            </div>
            <div className="price-row">
              <div className="price-info"><strong>ЛФК / АФК</strong></div>
              <div className="price-tag">9.000 тг</div>
            </div>
            <div className="price-row">
              <div className="price-info"><strong>Сурдопедагог</strong></div>
              <div className="price-tag">9.000 тг</div>
            </div>
            <div className="price-row">
              <div className="price-info"><strong>АВА</strong></div>
              <div className="price-tag">9.000 тг</div>
            </div>
          </div>
        </div>

        <div className="price-card">
          <div className="price-card-header bg-purple-gradient">
            <h3>Групповые занятия и Продлёнка</h3>
          </div>
          <div className="price-list">
            <div className="price-row">
              <div className="price-info">
                <strong>Групповые занятия</strong>
                <span>с 9:00 до 13:00</span>
              </div>
              <div className="price-tag">200.000 тг</div>
            </div>
            <div className="price-row">
              <div className="price-info">
                <strong>Групповые занятия</strong>
                <span>с 14:00 до 18:00</span>
              </div>
              <div className="price-tag">200.000 тг</div>
            </div>
            <div className="price-row">
              <div className="price-info">
                <strong>Продлёнка</strong>
                <span>с 9:00 до 18:00</span>
              </div>
              <div className="price-tag">200.000 тг</div>
            </div>
            <div className="price-row">
              <div className="price-info">
                <strong>Продлёнка</strong>
                <span>с 14:00 до 18:00</span>
              </div>
              <div className="price-tag">200.000 тг</div>
            </div>
          </div>
          <div className="price-note">
            <span>🎒 Абонемент на месяц</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export function Help() {
  const ref = useScrollReveal()
  const helps = [
    { text: '🗣️ Речь и общение: запуск и развитие речи, улучшение коммуникации.', icon: '🗣️' },
    { text: '🔤 Чистая речь: коррекция звукопроизношения.', icon: '🔤' },
    { text: '🧠 Интеллект: развитие мышления, внимания и памяти.', icon: '🧠' },
    { text: '🤝 Социум: развитие навыков общения и взаимодействия с окружающими.', icon: '🤝' },
    { text: '🛡️ Поведение: мягкая коррекция и поиск причин трудностей.', icon: '🛡️' },
    { text: '❤️ Эмоции: развитие эмоциональной регуляции и самоконтроля.', icon: '❤️' },
    { text: '✋ Ощущения: сенсорная интеграция.', icon: '✋' },
    { text: '🏃 Движение: развитие крупной и мелкой моторики, координации.', icon: '🏃' },
    { text: '🚽 Самостоятельность: формирование бытовых навыков и туалетный тренинг.', icon: '🚽' },
    { text: '🍽️ Питание: бережная коррекция пищевой избирательности.', icon: '🍽️' },
    { text: '📚 Учеба: качественная и спокойная подготовка к школе.', icon: '📚' }
  ]

  return (
    <section id="help" className="section reveal-section" ref={ref}>
      <div className="section-header">
        <h2 className="section-title">В чём мы помогаем?</h2>
        <p className="section-subtitle">Комплексное и бережное развитие каждой сферы жизни вашего ребёнка</p>
      </div>
      
      <div className="grid-help">
        {helps.map((item, i) => (
          <div key={i} className="help-item">
            <div className="help-icon">{item.icon}</div>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Services() {
  const ref = useScrollReveal()
  
  return (
    <section id="services" className="section bg-gradient reveal-section" ref={ref}>
      <div className="section-header">
        <h2 className="section-title">Наши занятия</h2>
        <p className="section-subtitle">Выберите подходящий формат</p>
      </div>

      <div className="services-wrapper">
        <div className="service-card">
          <div className="service-badge">Популярно</div>
          <h3>Индивидуальные</h3>
          <p className="service-time">⏱ 1 занятие — 40 минут</p>
          <ul>
            <li>🧠 Нейропсихолог</li>
            <li>💬 Логопед</li>
            <li>📚 Дефектолог</li>
            <li>🏋️ АФК, ЛФК тренер</li>
            <li>🖐 Сенсорный терапевт</li>
            <li>👂 Сурдопедагог</li>
            <li>👨‍⚕️ Психолог детский, подростковый и взрослый</li>
            <li>🧩 АВА-терапия</li>
          </ul>
          <a href="https://wa.me/77757447120" className="btn-card">Выбрать специалиста</a>
        </div>

        <div className="service-card highlight-card">
          <div className="service-badge gold">Для детей с ООП</div>
          <h3>Групповые занятия</h3>
          <p className="service-time" style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '0.9rem' }}>
            <span>⏱️ Первая смена: с 9:00 до 13:00</span>
            <span>⏱️ Вторая смена: с 14:00 до 18:00</span>
          </p>
          <ul>
            <li>🗣️ Логопед-дефектолог (развитие речи)</li>
            <li>🧠 Нейропсихолог (высшие психические функции)</li>
            <li>🏃 АФК тренер (двигательная активность)</li>
            <li>🎨 Педагог (творческое развитие)</li>
            <li>🧸 Игротерапевт (социальные навыки)</li>
          </ul>
          <a href="https://wa.me/77757447120" className="btn-card">Записаться в группу</a>
        </div>

        <div className="service-card highlight-card">
          <div className="service-badge gold">Для детей с ООП</div>
          <h3>Продлёнка</h3>
          <p className="service-time" style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '0.9rem' }}>
            <span>⏱️ Первая смена: с 9:00 до 13:00</span>
            <span>⏱️ Вторая смена: с 14:00 до 18:00</span>
          </p>
          <ul>
            <li>✅ Выполнение домашних заданий</li>
            <li>✅ Устранение пробелов в школьной программе</li>
            <li>✅ Занятия с нейропсихологом</li>
            <li>✅ ЛФК и развитие двигательных навыков</li>
            <li>✅ Эмоции и саморегуляция</li>
            <li>✅ Социальные истории и навыки общения</li>
            <li>✅ Развитие внимания, памяти и мышления</li>
            <li>✅ Формирование самостоятельности</li>
          </ul>
          <a href="https://wa.me/77757447120" className="btn-card">Узнать подробнее</a>
        </div>

        <div className="service-card logogroup-card">
          <div className="service-badge logogroup-badge">По субботам</div>
          <h3>Логогруппа</h3>
          <p className="service-time">⏱ 3 часа (с 10:00 до 13:00)</p>
          <ul>
            <li>👄 Звукопроизношение</li>
            <li>📖 Словарный запас</li>
            <li>💬 Построение фраз</li>
            <li>👂 Фонематический слух</li>
            <li>🧩 Общение с детьми</li>
          </ul>
          <a href="https://wa.me/77757447120" className="btn-card">Записаться в группу</a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer id="contacts" className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,42.7C840,32,960,32,1080,42.7C1200,53,1320,75,1380,85.3L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" fill="#4A0072"></path>
        </svg>
      </div>
      
      <div className="footer-content">
        <div className="footer-col">
          <h3>STEP BY STEP</h3>
          <p>Центр психолого-логопедической коррекции.</p>
          <p className="slogan">Поддержка • Развитие • Успех!</p>
        </div>
        
        <div className="footer-col">
          <h4>Контакты</h4>
          <p>📞 +7 775 744 7120</p>
          <p>📞 +7 701 526 0709</p>
          <p>📍 г. Астана, ул. Нажимеденова 34/2</p>
        </div>

        <div className="footer-col">
          <h4>Мы в соцсетях</h4>
          <a href="https://instagram.com/step_by_step.astana2016" target="_blank" rel="noreferrer" className="social-link">
            📷 @step_by_step.astana2016
          </a>
          <a href="https://wa.me/77757447120" className="btn-primary big-btn" target="_blank" rel="noreferrer">
            Написать в WhatsApp
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 STEP BY STEP. Все права защищены.</p>
      </div>
    </footer>
  )
}