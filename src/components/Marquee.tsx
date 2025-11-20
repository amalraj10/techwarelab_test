import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Marquee.scss';
import brand1 from '../assets/company_logos/Logo1.svg';
import brand2 from '../assets/company_logos/Logo2.svg';
import brand3 from '../assets/company_logos/Logo3.svg';

const BRAND_LOGOS = [brand1, brand2, brand3];
const ANIMATION_SPEED = 40;
const REPEAT_COUNT = 5;

const Marquee = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const items = slider.children;
    const singleSetWidth = Array.from(items)
      .slice(0, BRAND_LOGOS.length)
      .reduce((total, el) => total + el.getBoundingClientRect().width + 64, 0);

    tweenRef.current = gsap.to(slider, {
      x: `-${singleSetWidth}px`,
      duration: ANIMATION_SPEED,
      ease: 'linear',
      repeat: -1,
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  const pauseAnimation = () => {
    tweenRef.current?.pause();
  };

  const resumeAnimation = () => {
    tweenRef.current?.resume();
  };

  const allLogos = Array(REPEAT_COUNT).fill(BRAND_LOGOS).flat();

  return (
    <section className="marquee">
      <div
        className="logo-marquee__container"
        onMouseEnter={pauseAnimation}
        onMouseLeave={resumeAnimation}
      >
        <div ref={sliderRef} className="marquee__track">
          {allLogos.map((brandLogo, idx) => (
            <div key={`brand-${idx}`} className="marquee__item">
              <img src={brandLogo} alt={`Brand ${(idx % BRAND_LOGOS.length) + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
