import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

// ✅ Apni images yahan rakho: src/assets/ folder mein
import img1 from '../assets/idea1.jpg';

// Filhaal placeholder colors use kar rahe hain


const slides = [
  {
    img: img1,
    title: 'Welcome to iDEA Centre',
    desc: 'Innovative support services for ethnic minorities in Hong Kong.',
  },
  {
    img: img1,
    title: 'Join Our Community',
    desc: 'Connect with people from 15+ nationalities across Hong Kong.',
  },
  {
    img: img1,
    title: 'Learn & Grow Together',
    desc: 'Chinese, English classes and many more programmes available.',
  },
];

const stats = [
  { icon: '👥', num: '5,000+', label: 'Members Served' },
  { icon: '📚', num: '20+',    label: 'Programmes' },
  { icon: '🌍', num: '15+',    label: 'Nationalities' },
  { icon: '🏆', num: '10+',    label: 'Years of Service' },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const totalSlides = slides.length;

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  // ---- Touch / Mouse drag handlers ----
  const handleDragStart = (e) => {
    setDragging(true);
    startX.current = e.type === 'touchstart'
      ? e.touches[0].clientX
      : e.clientX;
  };

  const handleDragEnd = (e) => {
    if (!dragging) return;
    setDragging(false);
    const endX = e.type === 'touchend'
      ? e.changedTouches[0].clientX
      : e.clientX;
    const diff = startX.current - endX;

    if (diff > 50)       setCurrent((prev) => (prev + 1) % totalSlides); // swipe left
    else if (diff < -50) setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides); // swipe right
  };

  return (
    <>
      <section
        className="hero"
        style={{backgroundImage: `url(${slides[current].img})`, transition: 'background 0.10s ease' }}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        {/* Background pattern */}
        {/* <svg className="heroBgPattern" viewBox="0 0 800 340" aria-hidden="true">
          <rect x="60"  y="60"  width="120" height="80"  rx="8" fill="#fff" />
          <rect x="200" y="40"  width="80"  height="100" rx="8" fill="#fff" />
          <rect x="300" y="70"  width="140" height="70"  rx="8" fill="#fff" />
          <rect x="460" y="50"  width="90"  height="90"  rx="8" fill="#fff" />
          <rect x="570" y="65"  width="120" height="75"  rx="8" fill="#fff" />
          <circle cx="400" cy="28" r="20" fill="#fff" />
          <circle cx="560" cy="22" r="14" fill="#fff" />
        </svg> */}

        <div className="heroOverlay" />

        {/* Slide content */}
        <div className="heroContent" key={current}>
          <span className="heroBadge">Ethnic Minority Support Centre</span>
          <h1 className="heroTitle">
            {slides[current].title.split('iDEA Centre').map((part, i) =>
              i === 0
                ? <span key={i}>{part}<span className="heroTitleAccent">iDEA Centre</span></span>
                : <span key={i}>{part}</span>
            )}
          </h1>
          <p className="heroDesc">{slides[current].desc}</p>
          <div className="heroBtns">
            <button className="btnPrimary">Explore Programmes →</button>
            <button className="btnSecondary">Learn More</button>
          </div>
        </div>

        {/* Dots */}
        <div className="heroDots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={i === current ? 'dot dotActive' : 'dot'}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <button className="arrowBtn arrowLeft"
          onClick={() => setCurrent((current - 1 + totalSlides) % totalSlides)}>
          ‹
        </button>
        <button className="arrowBtn arrowRight"
          onClick={() => setCurrent((current + 1) % totalSlides)}>
          ›
        </button>

      </section>

      {/* Stats Bar */}
      <div className="statsBar">
        {stats.map((stat) => (
          <div className="statItem" key={stat.label}>
            <div className="statIcon">{stat.icon}</div>
            <div className="statNum">{stat.num}</div>
            <div className="statLabel">{stat.label}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;